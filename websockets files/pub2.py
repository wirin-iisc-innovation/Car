import json
import time
import random

STAT_FILE_ROUTE = "battery & tyre_status.json"
tyre_status = {
    "Tyre": {
        "Right_Front": 0,
        "Right_Back": 0,
        "Left_Front": 0,
        "Left_Back": 0
    }
}

def save_tyre_status():
    """Save the tyre data to the JSON file."""
    with open(STAT_FILE_ROUTE, 'w') as file:
        json.dump(tyre_status, file, indent=4)

def publish_tyre_pressure():
    while True:
        # Simulate real-time updates to tyre status
        tyre_status["Tyre"]["Right_Front"] = random.randint(0, 30)
        tyre_status["Tyre"]["Right_Back"] = random.randint(0, 30)
        tyre_status["Tyre"]["Left_Front"] = random.randint(0, 30)
        tyre_status["Tyre"]["Left_Back"] = random.randint(0, 30)
        save_tyre_status() 
        time.sleep(0.5)

if __name__ == "__main__":
    publish_tyre_pressure()
