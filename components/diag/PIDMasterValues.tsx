import React from 'react';

interface PIDMasterValuesProps {
  steeringPIDOutput: number;
  brakePIDOutput: number;
  motorRPIDOutput1: number;
  motorRPIDOutput2: number;
  masterPIDOutput: number;
}

const PIDMasterValues: React.FC<PIDMasterValuesProps> = ({
  steeringPIDOutput,
  brakePIDOutput,
  motorRPIDOutput1,
  motorRPIDOutput2,
  masterPIDOutput
}) => {
  return (
    <div className="voltage-current-container">
      <div className="pid-values-container">
        <div className='panel-title'>PID Master Values</div>
        <div className="pid-values">
          <div className="pid-value-item">
            <span className="pid-label">Steering PID Output (+/- 1024)</span>
            <span className="pid-value">{steeringPIDOutput}</span>
          </div>
          <div className="pid-value-item">
            <span className="pid-label">Brake PID Output (+/- 1024)</span>
            <span className="pid-value">{brakePIDOutput}</span>
          </div>
          <div className="pid-value-item">
            <span className="pid-label">Motor R PID Output (0 to 5000)</span>
            <span className="pid-value">{motorRPIDOutput1}</span>
          </div>
          <div className="pid-value-item">
            <span className="pid-label">Motor R PID Output (0 to 5000)</span>
            <span className="pid-value">{motorRPIDOutput2}</span>
          </div>
          <div className="pid-value-item">
            <span className="pid-label">Master PID Output (0 to 1000)</span>
            <span className="pid-value">{masterPIDOutput}</span>
          </div>
        </div>
        <div className="pid-master-line"></div>
      </div>
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car"/>
      </div>
    </div>
  );
};

export default PIDMasterValues;
