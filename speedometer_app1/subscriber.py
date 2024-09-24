import paho.mqtt.client as mqtt
import json
import signal
import sys

# Define the MQTT broker address and port
broker = "localhost"
port = 1883

# Define the topics for speed and power
speed_topic = "speed"
power_topic = "power"

# Handle termination signals for graceful shutdown
def signal_handler(sig, frame):
    print("\nDisconnecting from broker...")
    client.disconnect()
    sys.exit(0)

# Callback when the client connects to the broker
def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Connected to MQTT broker")
        client.subscribe([(speed_topic, 0), (power_topic, 0)])  # Subscribing to both topics
    else:
        print(f"Failed to connect, return code {rc}")

# Callback when a message is received
def on_message(client, userdata, msg):
    try:
        # Try to decode the message payload
        message = json.loads(msg.payload.decode())
        if msg.topic == speed_topic:
            print(f"Speed update: {message['speed']} km/h")
        elif msg.topic == power_topic:
            print(f"Power update: {message['power']} W")
    except (json.JSONDecodeError, KeyError) as e:
        print(f"Error decoding message on {msg.topic}: {e}")

# Subscriber function
def subscriber():
    global client
    client = mqtt.Client()

    # Assign callbacks
    client.on_connect = on_connect
    client.on_message = on_message

    # Connect to the broker
    client.connect(broker, port, 60)

    # Set up signal handler for graceful shutdown
    signal.signal(signal.SIGINT, signal_handler)

    # Start the loop to process callbacks and messages
    client.loop_forever()

if __name__ == "__main__":
    subscriber()
