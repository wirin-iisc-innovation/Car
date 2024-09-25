import React from "react";

interface AcVoltageAndCurrentProps {
  acCurrent: string;
  acVoltage: string;
}

const AcVoltageAndCurrent: React.FC<AcVoltageAndCurrentProps> = ({
  acCurrent,
  acVoltage,
}) => {
  return (
    <div className="voltage-current-container">
      <div className="car-container2">
        <img src="/images/Car image.svg" alt="Car" />
      </div>
      <div className="battery-current">
        <div className="panel-title">AC Current</div>
        <br/>
        <div className="panel-info">Est. AC</div>
        <div className="panel-info">Current drawn</div>
        <div className="panel-value">{acCurrent} A</div>
      </div>
      <div className="battery-voltage">
        <div className="panel-title">AC Voltage</div>
        <br/>
        <div className="panel-info">Est. AC</div>
        <div className="panel-info">Voltage</div>
        <div className="panel-value">{acVoltage} V</div>
      </div>
    </div>
  );
};

export default AcVoltageAndCurrent;
