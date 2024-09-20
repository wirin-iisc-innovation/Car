import paho.mqtt.client as mqtt
import json
import time

# Define the MQTT broker address and port
broker = "localhost"
port = 1883  # Default MQTT port

# Define the topic for wattage
topic = "wattage"

# Publisher function
def publisher():
    client = mqtt.Client()
    client.connect(broker, port, 60)

    while True:
        try:
            # Get user input for the wattage value
            power_value = input("Enter the wattage value to publish (or type 'exit' to quit): ")

            if power_value.lower() == 'exit':  # Allow user to quit
                print("Exiting the publisher.")
                break

            # Convert the input to a float value (assuming wattage can be a decimal number)
            watt_value = float(power_value)

            # Prepare the payload
            payload = {"power": watt_value}
            payload_json = json.dumps(payload)  # Convert to JSON format

            # Publish the payload to the MQTT broker
            client.publish(topic, payload_json)
            print(f"Published to {topic}: {payload_json}")

            # Delay for 1 second before asking for input again
            time.sleep(1)

        except ValueError:
            print("Invalid input. Please enter a valid number for wattage.")

if __name__ == "__main__":
    publisher()
