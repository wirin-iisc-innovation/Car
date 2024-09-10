import React from 'react';

interface ChargeLevelProps {
  chargePercentage: number;
}

const ChargeLevel: React.FC<ChargeLevelProps> = ({ chargePercentage }) => {
  return (
    <div className="voltage-current-container">
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car"/>
      </div>
      <div className="charge-level">
        <div className="panel-title">Charge Level</div>
        <br></br>
        <div className="panel-info">Current Charge: </div>
        <div className="battery-percent">{chargePercentage}%</div>
        <div className="charging-status">Not connected to charger</div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default ChargeLevel;
