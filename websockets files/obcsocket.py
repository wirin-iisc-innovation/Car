import json
import time
import threading
from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)

# Path to the JSON file that is updated every minute
STATUS_FILE_PATH = 'status.json'
last_status = None  # Keep track of the last status to detect changes

def load_obc_status():
    """Load the battery status from the JSON file."""
    try:
        with open(STATUS_FILE_PATH, 'r') as file:
            status = json.load(file)
    except FileNotFoundError:
        status = {"OBC": {}}
    return status

def broadcast_updates():
    """Continuously check for updates in the JSON file and broadcast them."""
    global last_status
    while True:        
        new_status = load_obc_status()
        # Only broadcast if the status has changed
        if new_status != last_status:
            last_status = new_status
            # Broadcast each value to all connected clients
            socketio.emit('ac_voltage', {"AC_Voltage": new_status["OBC"].get("AC_Voltage", 0)})
            socketio.emit('ac_current', {"AC_Current": new_status["OBC"].get("AC_Current", 0)})
            socketio.emit('dc_voltage', {"DC_Voltage": new_status["OBC"].get("DC_Voltage", 0)})
            socketio.emit('dc_current', {"DC_Current": new_status["OBC"].get("DC_Current", 0)})
            socketio.emit('ac_power', {"AC_Power": new_status["OBC"].get("AC_Power", 0)})
            socketio.emit('charging_time', {"charging_time": new_status["OBC"].get("charging_time", 0)})
            socketio.emit('OBC_status', {"OBC_status": new_status["OBC"].get("OBC_status", 1)})
            socketio.emit('OBC_temperature', {"OBC_Temperature": new_status["OBC"].get("Temperature", 0)})
        time.sleep(10)  # Check every 10 seconds

# Serve the HTML template
@app.route('/')
def index():
    return render_template('index3.html')

if __name__ == "__main__":
    # Start the background thread to check for updates
    update_thread = threading.Thread(target=broadcast_updates)
    update_thread.daemon = True
    update_thread.start()

    # Run the Flask-SocketIO application
    socketio.run(app, debug=True)
