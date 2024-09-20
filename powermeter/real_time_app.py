from fastapi import FastAPI, WebSocket, WebSocketDisconnect, HTTPException
import json
import os
import paho.mqtt.client as mqtt
from fastapi.responses import HTMLResponse
from threading import Thread
import asyncio

app = FastAPI()

# Path to the JSON file
json_file_path = "powerdata.json"
power_value = None  # Store the current power value
clients = []  # List of connected WebSocket clients

# MQTT Configuration
broker = "localhost"
port = 1883
topic = "wattage"  # Align topic with what we are storing

# Load power from JSON file
def load_power_from_json():
    global power_value
    try:
        if os.path.exists(json_file_path):
            with open(json_file_path, "r") as file:
                data = json.load(file)
                if "power" in data:
                    power_value = data["power"]
                    return power_value
        else:
            raise Exception("JSON file not found.")
    except Exception as e:
        print(f"Error loading JSON file: {e}")

# Update power in JSON file
def update_power_in_json(new_power):
    global power_value
    power_value = new_power  # Update the global power value
    with open(json_file_path, "w") as file:
        json.dump({"power": power_value}, file, indent=4)
    asyncio.run(notify_clients())  # Notify WebSocket clients of the updated power

# MQTT Callbacks
def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Connected to MQTT Broker")
        client.subscribe(topic)
    else:
        print("Failed to connect, return code %d\n", rc)

def on_message(client, userdata, message):
    payload = message.payload.decode("utf-8")
    data = json.loads(payload)
    if "power" in data:
        new_power = data["power"]
        update_power_in_json(new_power)
        print(f"Updated power: {new_power}")

# Start MQTT Client in a separate thread
def start_mqtt():
    client = mqtt.Client()
    client.on_connect = on_connect
    client.on_message = on_message
    client.connect(broker, port, 60)
    client.loop_forever()

# WebSocket handling
async def notify_clients():
    for client in clients:
        try:
            await client.send_json({"power": power_value})
        except WebSocketDisconnect:
            clients.remove(client)

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    clients.append(websocket)
    await websocket.send_json({"power": power_value})  # Send the current power on connection
    try:
        while True:
            await websocket.receive_text()  # Keep the connection alive
    except WebSocketDisconnect:
        clients.remove(websocket)

# FastAPI route to return the current power value
@app.get("/power")
async def get_power():
    if power_value is None:
        raise HTTPException(status_code=404, detail="Power not available")
    return {"power": power_value}

# HTML page to demonstrate WebSocket connection
@app.get("/")
async def get():
    html_content = """
    <html>
        <head>
            <title>Power Monitor</title>
        </head>
        <body>
            <h1>Power: <span id="power-value">Loading...</span></h1>
            <script>
                const ws = new WebSocket("ws://localhost:8000/ws");
                ws.onmessage = function(event) {
                    const data = JSON.parse(event.data);
                    document.getElementById("power-value").innerText = data.power;
                };
            </script>
        </body>
    </html>
    """
    return HTMLResponse(content=html_content)

# Start MQTT in a separate thread
Thread(target=start_mqtt).start()

# Load the initial power value from the JSON file
load_power_from_json()
