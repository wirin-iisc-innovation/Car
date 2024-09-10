import React from 'react';

interface VoltageCurrentContentProps {
  currentDrawn: number;
  batteryVoltage: number;
}

const VoltageCurrentContent: React.FC<VoltageCurrentContentProps> = ({
  currentDrawn,
  batteryVoltage
}) => {
  return (
    <div className="voltage-current-container">
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car"/>
      </div>
      <div className="battery-current">
        <div className="panel-title">Battery Current</div>
        <div className="panel-info">Est. Battery</div>
        <div className="panel-info">Current drawn</div>
        <div className="panel-info">(-500 to +500A)</div>
        <div className="panel-value">{currentDrawn} A</div>
      </div>
      <div className="battery-voltage">
        <div className="panel-title">Battery Voltage</div>
        <div className="panel-info">Est. Battery</div>
        <div className="panel-info">Voltage (0 to</div>
        <div className="panel-info">100v)</div>
        <div className="panel-value">{batteryVoltage} V</div>
      </div>
    </div>
  );
};

export default VoltageCurrentContent;
