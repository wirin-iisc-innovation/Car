import React from 'react';


const CarStatusUI: React.FC = () => {
  return (
    <div className="voltage-current-container">
      <div className="car-mode-popup">
        <div className="panel-title">Car Data Level 2</div>
        <br></br>
        <div className="status-row">
          <div className="status-label">Internal Temp</div>
          <div className="status-value">23°C</div>
        </div>
        <div className="status-row">
          <div className="status-label-humi">Internal Humidity</div>
          <div className="status-value">22%</div>
        </div>
      </div>
      <div className="car-container2">
        <img src="/images_diag/car-model.svg" alt="Car Model" />
      </div>
    </div>
  );
};

export default CarStatusUI;