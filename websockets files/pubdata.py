#import paho.mqtt.client as mqtt
import json
import time
import random
STATUS_FILE_PATH = 'battery_status.json'

# # MQTT Configuration
# broker = "localhost"
# port = 1883
# topic = "battery & tyre_status"

# Sample battery data
battery_data = {
    "Battery": {
        "Voltage": [2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.2,  2.2, 2.2, 2.2, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.2,  2.2, 2.2, 2.2, 2.3, 2.4, 2.5, 2.6],
        "Current": 4.3,
        "SOC": 85,
        "NumberOfCells": 6,
        "CellVoltage": 12.7 ,
        "ChargingMOSFET": "ON",
        "DischargingMOSFET": "ON",
        "CellMinimumVoltage": 2.1,
        "CellMaximumVoltage": 2.2,
        "Capacity": 55,
        "ERRORStatus": 0,
        "Temperature": 35
    },
    "Tyre": {
        "Right_Front": 7,
        "Right_Back": 29,
        "Left_Front": 26,
        "Left_Back": 29
    }
}

def save_battery_status():
    """Save the battery data to the JSON file."""
    with open(STATUS_FILE_PATH, 'w') as file:
        json.dump(battery_data, file, indent=4)

def publish_battery_data():
    """Publish battery data to the MQTT topic."""
    #client = mqtt.Client()
 #   client.connect(broker, port, 60)
    while True:
        # Simulate real-time updates to battery status
        # battery_data["Battery"]["CellVoltage"] += 0.01 
        # battery_data["Battery"]["Temperature"] -= 0.1
        battery_data["Battery"]["Voltage"][1] = random.randint(0,8)
        battery_data["Battery"]["CellVoltage"] = random.randrange(0,100)
        battery_data["Battery"]["Temperature"] = random.randrange(0,100)
        save_battery_status()  # Save to the JSON file

        # Publish the data as JSON
    #    client.publish(topic, json.dumps(battery_data))
        print(f"Published: {battery_data}")

        time.sleep(0.7)  # Publish interval, can be modified as per our requirement

if __name__ == "__main__":
    publish_battery_data()
