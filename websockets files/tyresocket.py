from flask import Flask, render_template
from flask_socketio import SocketIO, emit
import json
import time
import threading

app = Flask(__name__)
socketio = SocketIO(app)

STAT_FILE_PATH = 'tyre_status.json'
last_status = None

def load_tyre_status():
    """Load the tyre status from the JSON file."""
    try:
        with open(STAT_FILE_PATH, 'r') as file:
            status = json.load(file)
    except FileNotFoundError:
        status = {"Tyre": {}}
    return status

def validate_tyre_pressure(pressure):
    """Validate that the tyre pressure is between 0 and 50."""
    return 0 <= pressure <= 50

def broadcast_updates():
    """Continuously check for updates in the JSON file and broadcast them."""
    global last_status
    while True:
        new_status = load_tyre_status()
        # Only broadcast if the status has changed
        if new_status != last_status:
            last_status = new_status
            # Broadcast each value to all connected clients if it's within range
            for tyre, value in new_status["Tyre"].items():
                if validate_tyre_pressure(value):
                    socketio.emit(tyre.lower(), {tyre: value})
        time.sleep(0.1)  # Check every 0.1 seconds

@app.route('/')
def index():
    return render_template('index1.html')

if __name__ == "__main__":
    update_thread = threading.Thread(target=broadcast_updates)
    update_thread.daemon = True
    update_thread.start()
    socketio.run(app, debug=True)
