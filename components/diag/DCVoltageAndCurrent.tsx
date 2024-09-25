import React from "react";

interface DcVoltageAndCurrentProps {
  dcCurrent: string;
  dcVoltage: string;
}

const DcVoltageAndCurrent: React.FC<DcVoltageAndCurrentProps> = ({
  dcCurrent,
  dcVoltage,
}) => {
  return (
    <div className="voltage-current-container">
      <div className="car-container2">
        <img src="/images/Car image.svg" alt="Car" />
      </div>
      <div className="battery-current">
        <div className="panel-title">DC Current</div>
        <br/>
        <div className="panel-info">Est. DC</div>
        <div className="panel-info">Current drawn</div>
        <div className="panel-value">{dcCurrent} A</div>
      </div>
      <div className="battery-voltage">
        <div className="panel-title">DC Voltage</div>
        <br/>
        <div className="panel-info">Est. DC</div>
        <div className="panel-info">Voltage</div>
        <div className="panel-value">{dcVoltage} V</div>
      </div>
    </div>
  );
};

export default DcVoltageAndCurrent;
