import React from 'react';

interface AcVoltageAndCurrentProps {
  acCurrent: string;
  acVoltage: string;
}

const AcVoltageAndCurrent: React.FC<AcVoltageAndCurrentProps> = ({ acCurrent, acVoltage }) => {
  return (
    <div className="voltage-current-container">
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car" />
      </div>
      <div className="battery-current">
        <div className="panel-title">AC Current</div>
        <div className="panel-info">Est. AC</div>
        <div className="panel-info">Current drawn</div>
        <div className="panel-info">(0 to 100A)</div>
        <div className="panel-value">{acCurrent} A</div>
      </div>
      <div className="battery-voltage">
        <div className="panel-title">AC Voltage</div>
        <div className="panel-info">Est. AC</div>
        <div className="panel-info">Voltage (0 to</div>
        <div className="panel-info">300v)</div>
        <div className="panel-value">{acVoltage} V</div>
      </div>
    </div>
  );
};

export default AcVoltageAndCurrent;
