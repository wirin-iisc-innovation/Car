from fastapi import FastAPI, HTTPException
import json

app = FastAPI()

# File paths for speed and power data
speed_file_path = "speeddata.json"
power_file_path = "powerdata.json"

# Function to read speed value from JSON file
def get_speed_from_json():
    try:
        with open(speed_file_path, "r") as file:
            data = json.load(file)
            return data.get("speed")
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Speed file not found")
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Error decoding speed JSON data")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {str(e)}")

# Function to read power value from JSON file
def get_power_from_json():
    try:
        with open(power_file_path, "r") as file:
            data = json.load(file)
            return data.get("power")
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Power file not found")
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Error decoding power JSON data")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {str(e)}")

# FastAPI route to return speed value
@app.get("/speed")
async def get_speed():
    speed = get_speed_from_json()
    if speed is None:
        raise HTTPException(status_code=404, detail="Speed value not found in JSON file")
    return {"speed": speed}

# FastAPI route to return power value
@app.get("/power")
async def get_power():
    power = get_power_from_json()
    if power is None:
        raise HTTPException(status_code=404, detail="Power value not found in JSON file")
    return {"power": power}
