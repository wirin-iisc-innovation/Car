import os
import json
from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

MAPBOX_TOKEN = 'pk.eyJ1Ijoid2lwb2RydmNlIiwiYSI6ImNsdnVzN255YzE5MDYycm55c3hheDhtdTUifQ.lEWdCkssgxZWHlg0eGNkiw'
RECENT_LOCATIONS_FILE = os.path.join(os.path.dirname(__file__), 'recent_locations.json')

# Load recent locations
def load_recent_locations():
    if os.path.exists(RECENT_LOCATIONS_FILE):
        with open(RECENT_LOCATIONS_FILE, 'r') as file:
            return json.load(file)
    return []

# Save recent locations
def save_recent_location(location):
    recent_locations = load_recent_locations()
    if location not in recent_locations:
        recent_locations.insert(0, location)  
        recent_locations = recent_locations[:5]  
        with open(RECENT_LOCATIONS_FILE, 'w') as file:
            json.dump(recent_locations, file)

@app.route('/')
def index():
    return render_template('index.html', mapbox_token=MAPBOX_TOKEN)

@app.route('/directions')
def directions():
    start = request.args.get('start')
    end = request.args.get('end')
    response = requests.get(
        f'https://api.mapbox.com/directions/v5/mapbox/driving/{start};{end}?geometries=geojson&overview=full&steps=true&access_token={MAPBOX_TOKEN}')
    
    data = response.json()
    return jsonify(data)

@app.route('/recent-locations', methods=['GET'])
def recent_locations():
    recent_locations = load_recent_locations()
    return jsonify(recent_locations)

@app.route('/save-location', methods=['POST'])
def save_location():
    location_data = request.json
    if location_data:
        save_recent_location(location_data)
    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(debug=True)
