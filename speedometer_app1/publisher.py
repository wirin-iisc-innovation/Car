import paho.mqtt.client as mqtt
import json
import time

# Define the MQTT broker address and port
broker = "localhost"
port = 1883  # Default MQTT port

# Define the topics for speed and power
speed_topic = "speed"
power_topic = "power"

# File to store power data
data_file = "powerdata.json"

# Callback when the client connects to the broker
def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Connected to MQTT broker")
    else:
        print(f"Failed to connect, return code {rc}")

# Callback when a message is published
def on_publish(client, userdata, mid):
    print(f"Message {mid} has been published.")

# Publisher function
def publisher():
    client = mqtt.Client()

    # Assign callbacks
    client.on_connect = on_connect
    client.on_publish = on_publish

    # Connect to the broker
    client.connect(broker, port, 60)

    # Start the network loop in a non-blocking way
    client.loop_start()

    # List to hold speed and power data
    data = []

    while True:
        try:
            # Get user input for the speed value
            speed_value = input("Enter the speed value to publish (or type 'exit' to quit): ")

            # Handle 'exit' input
            if speed_value.lower() == "exit":
                print("Exiting the publisher...")
                break

            # Convert the input to a float for speed
            speed_value = float(speed_value)

            # Get user input for the power value
            power_value = input("Enter the power value to publish (or type 'exit' to quit): ")

            # Handle 'exit' input
            if power_value.lower() == "exit":
                print("Exiting the publisher...")
                break

            # Convert the input to a float for power
            power_value = float(power_value)

            # Prepare the speed payload
            speed_payload = {"speed": speed_value}
            speed_payload_json = json.dumps(speed_payload)  # Convert to JSON format

            # Prepare the power payload
            power_payload = {"power": power_value}
            power_payload_json = json.dumps(power_payload)  # Convert to JSON format

            # Publish the speed and power payloads to the MQTT broker
            client.publish(speed_topic, speed_payload_json)
            client.publish(power_topic, power_payload_json)

            print(f"Published to {speed_topic}: {speed_payload_json}")
            print(f"Published to {power_topic}: {power_payload_json}")

            # Append the data to the list
            data.append({
                "speed": speed_value,
                "power": power_value,
                "timestamp": time.time()  # Add a timestamp for each entry
            })

            # Write the data to the JSON file after each publication
            with open(data_file, "w") as f:
                json.dump(data, f, indent=4)

            # Delay for 1 second before asking for input again
            time.sleep(1)

        except ValueError:
            print("Invalid input. Please enter a valid number for speed and power.")

    # Stop the loop when exiting
    client.loop_stop()

if __name__ == "__main__":
    publisher()
