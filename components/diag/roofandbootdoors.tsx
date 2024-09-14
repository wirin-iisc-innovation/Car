import React from "react";


const NewComponent: React.FC = () => {
  return (
    <div className="new-doors-container">
      {/* First Door Status */}
      <div className="new-door-box first-door">
        <h3>First Door</h3>
        <p>Status</p>
        <p>(Open/Close/Opening/Closing)</p>
        <p className="new-status">Open</p>
      </div>

      {/* Second Door Status */}
      <div className="new-door-box second-door">
        <h3>Second Door</h3>
        <p>Status</p>
        <p>(Open/Close/Opening/Closing)</p>
        <p className="new-status">Open</p>
      </div>

      {/* Car Image */}
      <div className="new-car-image-container">
        <img src="/images/car13image.svg" alt="Car" className="new-car-image" />
      </div>
    </div>
  );
};

export default NewComponent;
