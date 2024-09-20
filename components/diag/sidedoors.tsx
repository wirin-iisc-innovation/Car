import React, { useState } from "react";

const SideDoors: React.FC = () => {
  // State for the left and right door statuses
  const [leftDoorStatus, setLeftDoorStatus] = useState("Open");
  const [rightDoorStatus, setRightDoorStatus] = useState("Open");

  return (
    <div className="side-doors-container">
      {/* Left Door Status */}
      <div className="door-box left-door">
        <h2>Left Door</h2>
        <div className="door-box-content">
          <span className="status-row">Status (Open/Close/Opening/Closing)</span>
          <span className="status">{leftDoorStatus}</span> {/* Using the variable */}
        </div>
      </div>

      {/* Right Door Status */}
      <div className="door-box right-door">
        <h2>Right Door</h2>
        <div className="door-box-content">
          <span className="status-row">Status (Open/Close/Opening/Closing)</span>
          <span className="status">{rightDoorStatus}</span> {/* Using the variable */}
        </div>
      </div>

      {/* Car Image */}
      <div className="car-image-container13">
        <img src="/images/car13image.svg" alt="Car" className="car-image13" />
      </div>
    </div>
  );
};

export default SideDoors;
