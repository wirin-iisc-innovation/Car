import React from "react";

interface ACPowerProps {
  acPower: string;
}

const ACPower: React.FC<ACPowerProps> = ({ acPower }) => {
  return (
    <div className="voltage-current-container">
      <div className="car-container2">
        <img src="/images/Car image.svg" alt="Car" />
      </div>
      <div className="charge-level">
        <div className="panel-title">AC Power</div>
        <br/><br/>
        <div className="panel-info">Est. AC Power</div>
        <div className="panel-info">Consumption</div>
        <div className="charge-level-value">{acPower} W</div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default ACPower;
