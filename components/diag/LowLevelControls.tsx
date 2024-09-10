import React from 'react';

interface LowLevelControlsProps {
  autonomousStatus: string;
  manualModeStatus: string;
  hardwareModeStatus: string;
}

const LowLevelControls: React.FC<LowLevelControlsProps> = ({
  autonomousStatus,
  manualModeStatus,
  hardwareModeStatus
}) => {
  return (
    <div className="voltage-current-container">
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car" className="car-image" />
      </div>
      <div className="status-charge">
        <div className="panel-title">Low Level Controls</div>
        <div className="control-item">
          <span className="control-label">Autonomous</span>
          <span className="control-detail">Level 1 out of 5</span>
          <span className="control-status">{autonomousStatus}</span>
        </div>
        <div className="control-item">
          <span className="control-label">Manual Mode</span>
          <span className="control-status">{manualModeStatus}</span>
        </div>
        <div className="control-item">
          <span className="control-label">Hardware Mode</span>
          <span className="control-status">{hardwareModeStatus}</span>
        </div>
        <p className="control-hint">Click to switch modes</p>
        <div className="status-charge-line"></div>
      </div>
    </div>
  );
};

export default LowLevelControls;
