import React,{useState} from 'react';

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

  return (
    <div className="seating-lights-container">
        <div className="lighting-box">
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
        </div>
      <div className="car-internal-lighting-container">
        <img src="/images/Car image1.svg" alt="Car3" className="car-image-internal-lighting" />
        <img src="/images/Group 427319068.svg" alt="Arrow" className="arrow-internal-lighting" />
      </div>
    </div>
  );
};

export default InternalLighting;
