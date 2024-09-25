import React from 'react';


const TV: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="voltage-current-container">
        <div className="bywire-system-container">
          <div className="status-row">
            <span className="panel-title">TV State Level</span>
          </div>
          <br></br>
          <div className="status-row">
            <div className="status-label2-tv">Status (Off/Mid/Open)</div>
            <span className="status-label4">Operating Level</span>
            <span className="status-mode">Open Mode</span>
            <span className="status-value1">100%</span>
          </div>
        </div>

        <div className="bywire-system-section">
          <div className="status-row">
            <span className="panel-title">TV Status</span>
          </div>
          <div className="status-row">
            <span className="status-label5">Status (Moving Up/Moving </span>  
            <span className="status-value2">State 1</span>
          </div>          
          <span className="status-label6">Down/State 1/State 2/State3)</span>  
          <div className="bywire-line"></div>
        </div>

        <div className="car-container2">
        <img src="/images_diag/car-model.svg" alt="Car Model" />
        </div>
    </div>
  );
};

export default TV;