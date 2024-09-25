import React from 'react';

interface ByWirePopupProps {
  onClose: () => void; // Prop to close the popup
}

const ByWirePopup: React.FC<ByWirePopupProps> = ({ onClose }) => {
  return (
    <div className="voltage-current-container">
      <div className="bywire-system-container">
        <div className="panel-title">Steering</div>
        <br></br>
        <div className="status-row">
          <div className="status-label2">Status</div>
          <div className="status-label3">(Open/Close/Opening/Closing)</div>
          <div className="status-value">Open</div>
        </div>
      </div>
      <div className="bywire-system-section">
        <div className="panel-title">Acc/Brake Pedal</div>
        <div className="status-row">
          <div className="status-label">Acc Pedal Status</div>
          <div className="status-value">Open</div>
        </div>
        <div className="status-row">
          <div className="status-label-brake">Brake Pedal Status</div>
          <div className="status-value-brake">Open</div>
        </div>
        <div className="status-label1">(Open/Close/Opening/Closing)</div>        
        <div className="status-label1-brake">(Open/Close/Opening/Closing)</div>
        <div className="bywire-line"></div>
      </div>
      <div className="car-container2">
        <img src="/images_diag/car-model.svg" alt="Car Model" />
      </div>
    </div>
  );
};

export default ByWirePopup;