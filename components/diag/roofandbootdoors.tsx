import React, { useState } from "react";

const NewComponent: React.FC = () => {
  // State variables for door statuses
  const [firstDoorStatus, setFirstDoorStatus] = useState("Open");
  const [secondDoorStatus, setSecondDoorStatus] = useState("Open");

  return (
    <div className="new-doors-container">
      {/* First Door Status */}
      <div className="new-door-box first-door">
        <h2>First Door</h2>
        <div className="new-door-box-content">
          <span className="new-status-row">Status (Open/Close/Opening/Closing)</span>
          <span className="new-status">{firstDoorStatus}</span> {/* Using the variable */}
        </div>
      </div>

      {/* Second Door Status */}
      <div className="new-door-box second-door">
        <h2>Second Door</h2>
        <div className="new-door-box-content">
          <span className="new-status-row">Status (Open/Close/Opening/Closing)</span>
          <span className="new-status">{secondDoorStatus}</span> {/* Using the variable */}
        </div>
      </div>

      {/* Car Image */}
      <div className="new-car-image-container">
        <img src="/images/car13image.svg" alt="Car" className="new-car-image" />
      </div>
    </div>
  );
};

export default NewComponent;
