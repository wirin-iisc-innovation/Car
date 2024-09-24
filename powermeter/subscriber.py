import paho.mqtt.client as mqtt
import json

# Define the MQTT broker address and port
broker = "localhost"
port = 1883  # Default MQTT port

# Path to the JSON file
json_file_path = "speeddata.json"

# Function to update the JSON file
def update_json_file(data):
    with open(json_file_path, 'w') as file:
        json.dump(data, file, indent=4)

# Subscriber callback function
def on_message(client, userdata, message):
    topic = message.topic
    payload = message.payload.decode("utf-8")
    
    try:
        data = json.loads(payload)  # Expect the payload to be in valid JSON format
    except json.JSONDecodeError:
        print(f"Error decoding JSON for topic {topic}: {payload}")
        return

    # Load existing data from JSON file
    try:
        with open(json_file_path, 'r') as file:
            current_data = json.load(file)
    except FileNotFoundError:
        # If file doesn't exist, start with an empty dictionary
        current_data = {}

    # Update data for the specific topic based on the payload structure {"speed": value}
    if 'speed' in data:
        current_data['speed'] = data['speed']  # Update with the "speed" value

        # Save the updated data back to the JSON file
        update_json_file(current_data)
        print(f"Received message on {topic}: {data}")
    else:
        print(f"No 'speed' key in the received message on {topic}: {data}")

# MQTT Subscriber function
def subscriber():
    client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2,"speed_subscriber")  # Initialize the client with an identifier
    client.on_message = on_message  # Assign callback function
    client.connect(broker, port, 60)  # Connect to the broker
    client.subscribe("speed")  # Subscribe to the "speed" topic
    client.loop_forever()  # Start listening for messages

if __name__ == "__main__":
    subscriber()
