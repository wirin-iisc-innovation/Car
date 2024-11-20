import json
import threading
from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)

# Path to the JSON file that contains the seat status
STATUS_FILE_PATH = 'seat_status.json'
last_status = None  # Keep track of the last status to detect changes
current_status = None  # Store the currently loaded status in memory

def load_seat_status():
    """Load the seat status from the JSON file."""
    global current_status
    try:
        with open(STATUS_FILE_PATH, 'r') as file:
            current_status = json.load(file)
    except FileNotFoundError:
        # Default seat status if the file is not found
        current_status = {
            "Seat": {
                "CaptainSeat": {
                    "FacingPosition": "Front",
                    "BackrestPosition": 0
                },
                "CoCaptainSeat": {
                    "FacingPosition": "Front",
                    "BackrestPosition": 0
                }
            }
        }

def broadcast_seat_updates():
    """Emit updates only when there are status changes for each seat component."""
    global last_status
    while True:
        load_seat_status()  # Load the latest status from file

        if current_status != last_status:
            # Compare each seat status with the previous one and emit updates if changed
            if current_status["Seat"]["CaptainSeat"]["FacingPosition"] != last_status["Seat"].get("CaptainSeat", {}).get("FacingPosition", "Front"):
                socketio.emit('captain_seat_facing', {"FacingPosition": current_status["Seat"]["CaptainSeat"]["FacingPosition"]}, broadcast=True)

            if current_status["Seat"]["CaptainSeat"]["BackrestPosition"] != last_status["Seat"].get("CaptainSeat", {}).get("BackrestPosition", 0):
                socketio.emit('captain_seat_backrest', {"BackrestPosition": current_status["Seat"]["CaptainSeat"]["BackrestPosition"]}, broadcast=True)

            if current_status["Seat"]["CoCaptainSeat"]["FacingPosition"] != last_status["Seat"].get("CoCaptainSeat", {}).get("FacingPosition", "Front"):
                socketio.emit('cocaptain_seat_facing', {"FacingPosition": current_status["Seat"]["CoCaptainSeat"]["FacingPosition"]}, broadcast=True)

            if current_status["Seat"]["CoCaptainSeat"]["BackrestPosition"] != last_status["Seat"].get("CoCaptainSeat", {}).get("BackrestPosition", 0):
                socketio.emit('cocaptain_seat_backrest', {"BackrestPosition": current_status["Seat"]["CoCaptainSeat"]["BackrestPosition"]}, broadcast=True)

            # Update the last_status to the current one
            last_status = current_status.copy()

        socketio.sleep(1)  # Control update frequency

# Serve the HTML template
@app.route('/')
def index():
    return render_template('index_seating.html')

if __name__ == "__main__":
    # Load the initial status from the JSON file
    load_seat_status()
    last_status = current_status.copy()  # Initialize last_status

    # Start the background thread to emit updates
    socketio.start_background_task(target=broadcast_seat_updates)

    # Run the Flask-SocketIO application
    socketio.run(app, debug=True)
# THERE ARE ADDITIONAL CHECKS THAT CHECK FOR THE CHANGE IN EACH COMPONENT....HAVE THISCHEKED OUT ONCE