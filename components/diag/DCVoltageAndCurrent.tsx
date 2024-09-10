import React from 'react';

interface DcVoltageAndCurrentProps {
  dcCurrent: string;
  dcVoltage: string;
}

const DcVoltageAndCurrent: React.FC<DcVoltageAndCurrentProps> = ({ dcCurrent, dcVoltage }) => {
  return (
    <div className="voltage-current-container">
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car" />
      </div>
      <div className="battery-current">
        <div className="panel-title">DC Current</div>
        <div className="panel-info">Est. DC</div>
        <div className="panel-info">Current drawn</div>
        <div className="panel-info">(0 to 100A)</div>
        <div className="panel-value">{dcCurrent} A</div>
      </div>
      <div className="battery-voltage">
        <div className="panel-title">DC Voltage</div>
        <div className="panel-info">Est. DC</div>
        <div className="panel-info">Voltage (0 to</div>
        <div className="panel-info">100v)</div>
        <div className="panel-value">{dcVoltage} V</div>
      </div>
    </div>
  );
};

export default DcVoltageAndCurrent;
