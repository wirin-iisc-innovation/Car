import React from 'react';

interface PIDControlsProps {
  masterControlStatus: string;
  steeringRackStatus: string;
  brakeStatus: string;
  motorsStatus: string;
}

const PIDControls: React.FC<PIDControlsProps> = ({
  masterControlStatus,
  steeringRackStatus,
  brakeStatus,
  motorsStatus
}) => {
  return (
    <div className="voltage-current-container">
      <div className="pid-controls-box">
        <div className="panel-title">PID Controls</div>
        <br />
        <div className="control-item">
          <span className="control-label">Master Control</span>
          <span className="control-status">{masterControlStatus}</span>
        </div>
        <div className="control-item">
          <span className="control-label">Steering Rack</span>
          <span className="control-status">{steeringRackStatus}</span>
        </div>
        <div className="control-item">
          <span className="control-label">Brake</span>
          <span className="control-status">{brakeStatus}</span>
        </div>
        <div className="control-item">
          <span className="control-label">Motors</span>
          <span className="control-status">{motorsStatus}</span>
        </div>
        <div className="status-charge-line"></div>
      </div>
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car2" />
      </div>
    </div>
  );
};

export default PIDControls;
