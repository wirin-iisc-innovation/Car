import React from 'react';

interface ChargingTimeProps {
  chargingTime: string;
}

const ChargingTime: React.FC<ChargingTimeProps> = ({ chargingTime }) => {
  return (
    <div className="voltage-current-container">
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car" />
      </div>
      <div className="charge-level">
        <div className="panel-title">Charging Time</div>
        <br />
        <div className="panel-info">Est. time to full</div>
        <div className="panel-info">(0 to 999m)</div>
        <div className="charging-time-value">{chargingTime}m</div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default ChargingTime;
