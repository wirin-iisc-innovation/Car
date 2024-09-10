import React from 'react';

interface ControlUnit2Props {
  heartbeat1Status: string;
  activeStatus: string;
  activeSoulStatus: string;
}

const ControlUnit2: React.FC<ControlUnit2Props> = ({ heartbeat1Status, activeStatus, activeSoulStatus }) => {
  return (
    <div className="voltage-current-container">
      <div className="control-unit-box">
        <div className="panel-title">Control Unit 2</div>
        <br />
        <div className="control-unit2-item">
          <span className="control-unit2-label">MPU Motion Planner</span>
          <span className="control-unit2-status">Status</span>
          <span className="control-unit2-status-detail">{activeStatus}</span>
        </div>
        <div className="control-unit2-item">
          <span className="control-unit2-label">ECU1-VCU</span>
          <span className="control-unit2-status">Heartbeat</span>
          <span className="control-unit2-status-detail">{heartbeat1Status}</span>
          <br />
          <br />
          <span className="control-unit2-status">Active Soul</span>
          <span className="control-unit2-status-detail">{activeSoulStatus}</span>
        </div>
        <div className="control-unit2-item">
          <span className="control-unit2-label">ECUX-FCU</span>
          <span className="control-unit2-status">Heartbeat</span>
          <span className="control-unit2-status-detail">{heartbeat1Status}</span>
          <br />
        </div>
        <div className="control-unit2-item">
          <span className="control-unit2-label">ECU3-DoorECU</span>
          <span className="control-unit2-status">Heartbeat</span>
          <span className="control-unit2-status-detail">{heartbeat1Status}</span>
          <span className="control-unit2-status">Active Soul</span>
          <span className="control-unit2-status-detail">{activeSoulStatus}</span>
          <br />
        </div>
        <div className="control-unit2-item">
          <span className="control-unit2-label">ECU4-RPi-OUT</span>
          <span className="control-unit2-status">Heartbeat</span>
          <span className="control-unit2-status-detail">{heartbeat1Status}</span>
          <br />
        </div>
        <div className="control-unit-line"></div>
      </div>
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car3" />
      </div>
    </div>
  );
};

export default ControlUnit2;
