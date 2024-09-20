from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
import os
import json
import paho.mqtt.client as mqtt
from threading import Thread
import asyncio

app = FastAPI()

# Add CORS middleware to allow requests from your React app
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with your React app URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# File paths for power and speed data
data_json_file = "powerdata.json"

# Store the current power and speed values
power_value = None
speed_value = None

# WebSocket clients
clients = []

# MQTT Configuration
broker = "localhost"
port = 1883
power_topic = "power"
speed_topic = "speed"

# Load data from JSON files
def load_value_from_json(file_path):
    try:
        if os.path.exists(file_path):
            with open(file_path, "r") as file:
                data_list = json.load(file)  # Loading as a list
                if data_list:
                    # Pick the latest data entry
                    data = data_list[-1]
                    return data.get("speed"), data.get("power")
        else:
            raise Exception(f"JSON file not found: {file_path}")
    except Exception as e:
        print(f"Error loading JSON file: {e}")
        return None, None

# Update values in JSON files and notify WebSocket clients
def update_value_in_json(file_path, speed, power):
    global power_value, speed_value

    power_value = power
    speed_value = speed

    # Append the new speed and power data
    with open(file_path, "r+") as file:
        try:
            current_data = json.load(file)  # Load existing data (list)
        except json.JSONDecodeError:
            current_data = []  # If the file is empty or invalid, start with an empty list

        # Append new data with timestamp
        new_data = {
            "speed": speed,
            "power": power,
            "timestamp": time.time()
        }
        current_data.append(new_data)

        # Write the updated data back to the file
        file.seek(0)
        json.dump(current_data, file, indent=4)

    # Notify WebSocket clients asynchronously
    asyncio.run(notify_clients())

# MQTT Callbacks
def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Connected to MQTT Broker")
        client.subscribe([(power_topic, 0), (speed_topic, 0)])
    else:
        print(f"Failed to connect with code {rc}")

def on_message(client, userdata, message):
    payload = message.payload.decode("utf-8")
    data = json.loads(payload)
    
    if message.topic == power_topic and "power" in data:
        power_value = data["power"]
        print(f"Received power: {power_value}")
    if message.topic == speed_topic and "speed" in data:
        speed_value = data["speed"]
        print(f"Received speed: {speed_value}")

    # Update the JSON file with new values
    update_value_in_json(data_json_file, speed_value, power_value)

# Start MQTT client in a separate thread
def start_mqtt():
    client = mqtt.Client()
    client.on_connect = on_connect
    client.on_message = on_message
    client.connect(broker, port, 60)
    client.loop_forever()

# Notify WebSocket clients of updates
async def notify_clients():
    for client in clients:
        try:
            await client.send_json({
                "power": power_value,
                "speed": speed_value
            })
        except WebSocketDisconnect:
            clients.remove(client)

# WebSocket endpoint
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    clients.append(websocket)
    await websocket.send_json({
        "power": power_value,
        "speed": speed_value
    })  # Send initial values on connection
    try:
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        clients.remove(websocket)

# FastAPI routes for power and speed
@app.get("/power")
async def get_power():
    if power_value is None:
        raise HTTPException(status_code=404, detail="Power not available")
    return {"power": power_value}

@app.get("/speed")
async def get_speed():
    if speed_value is None:
        raise HTTPException(status_code=404, detail="Speed not available")
    return {"speed": speed_value}

# HTML test page
@app.get("/")
async def get():
    html_content = """
    <html>
        <head>
            <title>Monitor</title>
        </head>
        <body>
            <h1>Power: <span id="power-value">Loading...</span></h1>
            <h1>Speed: <span id="speed-value">Loading...</span></h1>
            <script>
                const ws = new WebSocket("ws://localhost:8000/ws");
                ws.onmessage = function(event) {
                    const data = JSON.parse(event.data);
                    document.getElementById("power-value").innerText = data.power;
                    document.getElementById("speed-value").innerText = data.speed;
                };
            </script>
        </body>
    </html>
    """
    return HTMLResponse(content=html_content)

# Start MQTT in a separate thread
Thread(target=start_mqtt).start()

# Load initial power and speed values
speed_value, power_value = load_value_from_json(data_json_file)
