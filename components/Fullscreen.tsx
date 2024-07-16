import React from 'react';

const FullScreen: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fullscreen-popup-container">
      <div className="fullscreen-popup">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="popup-content">
          <div className="icon-container diagnostics">
            <img src="images_fullpage/Diagnostics.svg" alt="Diagnostics" />
            <span>Diagnostics</span>
          </div>
          <div className="icon-container parking-assist">
            <img src="images_fullpage/Group.svg" alt="Parking Assist" />
            <span>Parking Assist</span>
          </div>
          <div className="icon-container emergency-stop">
            <img src="images_fullpage/Vector2.svg" alt="Emergency Stop" />
            <span>Emergency Stop</span>
          </div>
          <div className="icon-container mode-switch">
            <img src="images_fullpage/Group 427319020.svg" alt="Mode Switch" />
            <span>Mode Switch</span>
          </div>
          <div className="icon-container car-controls">
            <img src="images_fullpage/Vector3.svg" alt="Car Controls" />
            <span>Car Controls</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreen;
