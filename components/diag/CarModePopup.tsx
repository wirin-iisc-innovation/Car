import React from 'react';

interface CarModePopupProps {
  onClose: () => void;
}

const CarModePopup: React.FC<CarModePopupProps> = ({ onClose }) => {
  return (
    <div className="voltage-current-container">
      <div className="car-container2">
        <img src="/images_diag/car-model.svg" alt="Car Model" />
      </div>
      <div className="car-mode-popup">
        <div className="panel-title">Car Mode</div>
        <br></br>
        <div className="panel-info">CAR MODE</div>
        <div className="car-mode-panel-value">AMBIENT MODE</div>
      </div>
    </div>
  );
};

export default CarModePopup;