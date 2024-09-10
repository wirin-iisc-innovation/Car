import React from 'react';

interface ChargingStatusProps {
  mosfetCharging: string;
  mosfetDischarging: string;
  chargerStatus: string;
}

const ChargingStatus: React.FC<ChargingStatusProps> = ({ mosfetCharging, mosfetDischarging, chargerStatus }) => {
  return (
    <div className="voltage-current-container">
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car" />
      </div>
      <div className="status-charge">
        <div className="panel-title">Charging Status</div>
        <br></br>
        <div className="panel-info">MOSFET</div>
        <div className="panel-info">Charging</div>
        <div className="mosfet-status">{mosfetCharging}</div>
        <br></br>
        <div className="panel-info">MOSFET</div>
        <div className="panel-info">Discharging</div>
        <div className="mosfet-status">{mosfetDischarging}</div>
        <br></br>
        <div className="charging-status">{chargerStatus}</div>
        <div className="status-charge-line"></div>
      </div>
    </div>
  );
};

export default ChargingStatus;
