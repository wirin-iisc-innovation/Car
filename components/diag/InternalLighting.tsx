import React,{useState, useEffect} from 'react';
import {io} from 'socket.io-client';

const InternalLighting: React.FC = () => {
    const [RoofLightStatus, setRoofLightStatus] = useState('ON');
    const [RoofLightValue, setRoofLightValue] = useState(100);
    const [DoorPuddleStatus, setDoorPuddleStatus] = useState('ON');
    const [DoorPuddleValue, setDoorPuddleValue] = useState(50);
    const [FloorLightsStatus, setFloorLightsStatus] = useState('ON');
    const [FloorLightsValue, setFloorLightsValue] = useState(100);
    const [DashboardLightsStatus, setDashboardLightsStatus] = useState('OFF');
    const [DashboardLightsValue, setDashboardLightsValue] = useState('OFF');
    const [BoatLightsStatus, setBoatLightsStatus] = useState('ON');

    useEffect(() =>{
      console.log("Setting up InternalLighting hooks")

      const updateFunction = () => {
        fetch('http://0.0.0.0:5001/int_lighting')
          .then(async response => {
            const data = await response.json()
            console.log("Lighing data: ")
            console.log(data)   


            const int = data["Internal"]
            const dashboard = int["DashboardLights"]
            const bootLights = int["BootLights"]
            const doorpuddle = int["DoorPuddleLights"]
            const floor = int["FloorLights"]
            const roof = int["RoofLight"]

            setDashboardLightsStatus(dashboard["Status"] ? "ON" : "OFF")
            setDashboardLightsValue(dashboard["Brightness"])

            setRoofLightStatus(roof["Status"] ? "ON" : "OFF")
            setRoofLightValue(roof["Brightness"])

            setFloorLightsStatus(floor["Status"] ? "ON" : "OFF")
            setFloorLightsValue(floor["Brightness"])

            setDoorPuddleStatus(doorpuddle["Status"] ? "ON" : "OFF")
            setDoorPuddleValue(doorpuddle["Brightness"])

            setBoatLightsStatus(bootLights["Status"] ? "ON" : "OFF")
        })
      }
      const id = setInterval(updateFunction, 1000)
      return () => clearInterval(id)

    })

  return (
    <div className="external-lighting-box">
      <h2>Internal Lighting</h2>
      <br/>
      <div className="lighting-item">
          <span className="lighting-label">Roof Light</span>
          <span className="lighting-status">{RoofLightStatus}</span>
          <span className="lighting-status-detail">{RoofLightValue}</span>
      </div>
      <div className="lighting-item">
          <span className="lighting-label">Door Puddle</span>
          <span className="lighting-status">{DoorPuddleStatus}</span>
          <span className="lighting-status-detail">{DoorPuddleValue}</span>
      </div>
      <div className="lighting-item">
          <span className="lighting-label">Floor Lights</span>
          <span className="lighting-status">{FloorLightsStatus}</span>
          <span className="lighting-status-detail">{FloorLightsValue}</span>
      </div>
      <div className="lighting-item">
          <span className="lighting-label">Dashboard Lights</span>
          <span className="lighting-status">{DashboardLightsStatus}</span>
          <span className="lighting-status-detail">{DashboardLightsValue}</span>
      </div>
      <div className="lighting-item">
          <span className="lighting-label">Boat Lights</span>
          <span className="lighting-status">{BoatLightsStatus}</span>
          <span className="lighting-status-detail">-</span>
      </div>
      <div className="car-external-lighting-container">
        <img src="/images/Car image1.svg" alt="Car3" className="car-image-external-lighting" />
        <img src="/images/Group 427319068.svg" alt="Arrow3" className="arrow-external-lighting-image" />
      </div>
    </div>
  );
};

export default InternalLighting;
