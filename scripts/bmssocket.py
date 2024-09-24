import json
import time
import threading
from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins='*')

# Path to the JSON file that is updated every minute
STATUS_FILE_PATH = 'battery_status.json'
last_status = None  # Keep track of the last status to detect changes

def load_battery_status():
    """Load the battery status from the JSON file."""
    try:
        with open(STATUS_FILE_PATH, 'r') as file:
            status = json.load(file)
    except FileNotFoundError:
        status = {"Battery": {}}
    return status

def broadcast_updates():
    """Continuously check for updates in the JSON file and broadcast them."""
    global last_status
    while True:
        new_status = load_battery_status()
        # Only broadcast if the status has changed
        if new_status != last_status:
            last_status = new_status
            # Broadcast each value to all connected clients
            socketio.emit('battery_voltage', {"Voltage": new_status["Battery"].get("Voltage", [])})
            socketio.emit('battery_current', {"Current": new_status["Battery"].get("Current", 0)})
            socketio.emit('battery_soc', {"SOC": new_status["Battery"].get("SOC", 0)})
            socketio.emit('battery_number_of_cells', {"NumberOfCells": new_status["Battery"].get("NumberOfCells", 0)})
            socketio.emit('battery_cell_voltage', {"CellVoltage": new_status["Battery"].get("CellVoltage", 0)})
            socketio.emit('battery_charging_mosfet', {"ChargingMOSFET": new_status["Battery"].get("ChargingMOSFET", "OFF")})
            socketio.emit('battery_discharging_mosfet', {"DischargingMOSFET": new_status["Battery"].get("DischargingMOSFET", "OFF")})
            socketio.emit('battery_minimum_voltage', {"CellMinimumVoltage": new_status["Battery"].get("CellMinimumVoltage", 0)})
            socketio.emit('battery_maximum_voltage', {"CellMaximumVoltage": new_status["Battery"].get("CellMaximumVoltage", 0)})
            socketio.emit('battery_capacity', {"Capacity": new_status["Battery"].get("Capacity", 0)})
            socketio.emit('battery_error_status', {"ERRORStatus": new_status["Battery"].get("ERRORStatus", 0)})
            socketio.emit('battery_temperature', {"Temperature": new_status["Battery"].get("Temperature", 0)})
        time.sleep(0.1)  # Check every 10 seconds

# Serve the HTML template
@app.route('/')
def index():
    return render_template('index.html')

# WebSocket route to get battery voltage (and other values, if needed)
@socketio.on('get_voltage')
def get_battery_voltage():
    status = load_battery_status()
    emit('battery_voltage', {"Voltage": status["Battery"].get("Voltage", [])})

# Additional WebSocket routes for other attributes (current, soc, etc.)

# WebSocket route to get battery current
@socketio.on('get_current')
def get_battery_current():
    status = load_battery_status()
    emit('battery_current', {"Current": status["Battery"].get("Current", 0)})

# WebSocket route to get battery SOC
@socketio.on('get_soc')
def get_battery_soc():
    status = load_battery_status()
    emit('battery_soc', {"SOC": status["Battery"].get("SOC", 0)})

# WebSocket route to get number of cells
@socketio.on('get_number_of_cells')
def get_battery_number_of_cells():
    status = load_battery_status()
    emit('battery_number_of_cells', {"NumberOfCells": status["Battery"].get("NumberOfCells", 0)})

# WebSocket route to get cell voltage
@socketio.on('get_cell_voltage')
def get_battery_cell_voltage():
    status = load_battery_status()
    emit('battery_cell_voltage', {"Charge": status["Battery"].get("CellVoltage", 0)})

# WebSocket route to get charging MOSFET state
@socketio.on('get_charging_mosfet')
def get_battery_charging_mosfet():
    status = load_battery_status()
    emit('battery_charging_mosfet', {"ChargingMOSFET": status["Battery"].get("ChargingMOSFET", "OFF")})

# WebSocket route to get discharging MOSFET state
@socketio.on('get_discharging_mosfet')
def get_battery_discharging_mosfet():
    status = load_battery_status()
    emit('battery_discharging_mosfet', {"DischargingMOSFET": status["Battery"].get("DischargingMOSFET", "OFF")})

# WebSocket route to get minimum cell voltage
@socketio.on('get_min_voltage')
def get_battery_cell_minimum_voltage():
    status = load_battery_status()
    emit('battery_minimum_voltage', {"CellMinimumVoltage": status["Battery"].get("CellMinimumVoltage", 0)})

# WebSocket route to get max cell voltage
@socketio.on('get_max_voltage')
def get_battery_cell_maximum_voltage():
    status = load_battery_status()
    emit('battery_maximum_voltage', {"CellMaximumVoltage": status["Battery"].get("CellMaximumVoltage", 0)})

# WebSocket route to get battery capacity
@socketio.on('get_capacity')
def get_battery_capacity():
    status = load_battery_status()
    emit('battery_capacity', {"Capacity": status["Battery"].get("Capacity", 0)})

# WebSocket route to get battery error status
@socketio.on('get_error_status')
def get_battery_error_status():
    status = load_battery_status()
    emit('battery_error_status', {"ERRORStatus": status["Battery"].get("ERRORStatus", 0)})

# WebSocket route to get battery temperature
@socketio.on('get_temperature')
def get_battery_temperature():
    status = load_battery_status()
    emit('battery_temperature', {"Temperature": status["Battery"].get("Temperature", 0)})

if __name__ == "__main__":
    # Start the background thread to check for updates
    # update_thread = threading.Thread(target=broadcast_updates)
    # update_thread.daemon = True
    # update_thread.start()

    # Run the Flask-SocketIO application
    socketio.run(app, debug=True)
