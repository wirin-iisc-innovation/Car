# Speedometer for wirin project demo

*Note :  Use the real_time_app for the fastapi application with MQTT over Websockets service, which provides real time updation of speed data as per the user.*

---
## Prerequisites

Make sure you have the following installed:

- Python 3.8 or above
- Mosquitto MQTT broker (or another MQTT broker)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/real-time-speed-monitor.git
cd real-time-speed-monitor
```

2. Create and activate a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

## Dependencies

The following dependencies are required to run the application:

- `fastapi`: A modern, fast (high-performance) web framework for building APIs with Python.
- `uvicorn`: ASGI server for running the FastAPI application.
- `paho-mqtt`: MQTT client library for Python, used to interact with the MQTT broker.
- `asyncio`: Provides the asynchronous support required for WebSocket and FastAPI.
- `json`: For working with JSON files to store speed data.
- `os`: Used to interact with the file system (checking file existence, etc.).

## `requirements.txt`:

```
fastapi==0.95.0
uvicorn==0.21.1
paho-mqtt==2.1.0
```

## Running the Application

1. Make sure the Mosquitto broker is running on `localhost:1883`. If you're using another broker or address, modify the `broker` and `port` settings in the `real_time_app.py` file.

2. Start the FastAPI application:

```bash
uvicorn real_time_app:app --reload
```

This will start the server on `http://localhost:8000/`.

3. If you want to simulate speed updates, you can use the `publisher.py` script to send MQTT messages to the broker.

4. Open your browser and navigate to `http://localhost:8000/` to view the real-time speed monitoring dashboard.

5. The value of speed updates as you send values from the terminal.
