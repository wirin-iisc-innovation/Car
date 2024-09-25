from flask import Flask, render_template
from flask_socketio import SocketIO, emit
import json
import time
import threading

app = Flask(__name__)
socketio = SocketIO(app)

STAT_FILE_PATH = 'battery & tyre_status.json'
last_status = None

def load_tyre_status():
    """Load the tyre status from the JSON file."""
    try:
        with open(STAT_FILE_PATH, 'r') as file:
            status = json.load(file)
    except FileNotFoundError:
        status = {"Tyre": {}}
    return status


def broadcast_updates():
    """Continuously check for updates in the JSON file and broadcast them."""
    global last_status
    while True:
        new_status = load_tyre_status()
        # Only broadcast if the status has changed
        if new_status != last_status:
            last_status = new_status
            # Broadcast each value to all connected clients
            socketio.emit('front_right', {"Right_Front": new_status["Tyre"].get("Right_Front", 0)})
            socketio.emit('front_left', {"Left_Front": new_status["Tyre"].get("Left_Front", 0)})
            socketio.emit('back_right', {"Right_Back": new_status["Tyre"].get("Right_Back", 0)})
            socketio.emit('back_left', {"Left_Back": new_status["Tyre"].get("Left_Back", 0)})
        time.sleep(0.1)  # Check every 0.1 seconds

@app.route('/')
def index():
    return render_template('index1.html')

@socketio.on('front_right')
def get_fr_tyre_stat():
    status = load_tyre_status()
    emit('front_right', {"Right_Front": status["Tyre"].get("Right_Front", 0)})

@socketio.on('front_left')
def get_fl_tyre_stat():
    status = load_tyre_status()
    emit('front_left', {"Left_Front": status["Tyre"].get("Left_Front", 0)})

@socketio.on('back_right')
def get_br_tyre_stat():
    status = load_tyre_status()
    emit('back_right', {"Right_Back": status["Tyre"].get("Right_Back", 0)})

@socketio.on('back_left')
def get_bl_tyre_stat():
    status = load_tyre_status()
    emit('back_left', {"Left_Back": status["Tyre"].get("Left_Back", 0)})

if __name__ == "__main__":
    update_thread = threading.Thread(target=broadcast_updates)
    update_thread.daemon = True
    update_thread.start()
    socketio.run(app, debug=True)
