import React from 'react';

interface CarDataLevel1Props {
  onClose: () => void; // Prop to close the component
}

const CarDataLevel1: React.FC<CarDataLevel1Props> = ({ onClose }) => {
  return (
    <div className="voltage-current-container">
      <div className="control-unit-box">
        <div className="panel-title">Car Data Level 1</div>
        <br></br>
        <div className="status-row">
          <div className="status-label">Speed L (0 to 5000rpm)</div>
          <div className="status-value">4000rpm</div>
        </div>
        <div className="status-row">
          <div className="status-label">Speed R (0 to 5000rpm)</div>
          <div className="status-value">4000rpm</div>
        </div>
        <div className="status-row">
          <div className="status-label">Steering Angle (0 to 1000)</div>
          <div className="status-value">259</div>
        </div>
        <div className="status-row">
          <div className="status-label">Brake Level (0 to 300)</div>
          <div className="status-value">259</div>
        </div>
        <div className="status-row">
          <div className="status-label-gear">Gear</div>
          <div className="status-label1-gear">Status</div>
          <div className="status-value">FORWARD</div>
        </div>
        <div className="status-row">
          <div className="status-label">Foot Switch</div>
          <div className="status-label2-gear">State</div>
          <div className="status-value">OFF</div>
        </div>
        <div className="status-row">
          <div className="status-label">Motor Brake</div>
          <div className="status-label3-gear">State</div>
          <div className="status-value">ON</div>
        </div>
        <div className="data-level1-line"></div>
      </div>
      <div className="car-container2">
        <img src="/images_diag/car-model.svg" alt="Car Model" />
      </div>
    </div>
  );
};

export default CarDataLevel1;