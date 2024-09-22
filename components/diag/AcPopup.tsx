// AcPopup.tsx
import React from 'react';

interface AcPopupProps {
  onClose: () => void;
}

const AcPopup: React.FC<AcPopupProps> = ({ onClose }) => {
  return (
    <div className="ac-popup">
      <div className="ac-popup-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>AC Control</h2>
        {/* Add your AC control content here */}
        <p>Temperature: 24°C</p>
        <p>Fan Speed: Medium</p>
      </div>
    </div>
  );
};

export default AcPopup;
