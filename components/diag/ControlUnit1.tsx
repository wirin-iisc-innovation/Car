import React from 'react';

interface ControlUnit1Props {
  heartbeatStatus: string;
}

const ControlUnit1: React.FC<ControlUnit1Props> = ({ heartbeatStatus }) => {
  return (
    <div className="voltage-current-container">
      <div className="control-unit-box">
        <div className="panel-title">Control Unit 1</div>
        <br></br>
        <div className="control-unit-item">
          <span className="control-unit-label">ECU2-ICU</span>
          <span className="control-unit-status">Heartbeat</span>
          <span className="control-unit-status-detail">{heartbeatStatus}</span>
        </div>
        <div className="control-unit-item">
          <span className="control-unit-label">ECU716-VHMS</span>
          <span className="control-unit-status">Heartbeat</span>
          <span className="control-unit-status-detail">{heartbeatStatus}</span>
        </div>
        <div className="control-unit-item">
          <span className="control-unit-label">ECU8-USU</span>
          <span className="control-unit-status">Heartbeat</span>
          <span className="control-unit-status-detail">{heartbeatStatus}</span>
        </div>
        <div className="control-unit-item">
          <span className="control-unit-label">17 - Monitor and Processor</span>
          <span className="control-unit-status">Status</span>
          <span className="control-unit-status-detail">PROCESSING</span>
        </div>
        <div className="control-unit-line"></div>
      </div>
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car3" />
      </div>
    </div>
  );
};

export default ControlUnit1;
