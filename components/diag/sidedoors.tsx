import React, { useState } from "react";

const SideDoors: React.FC = () => {
  // State for the left and right door statuses
  const [leftDoorStatus, setLeftDoorStatus] = useState("Open");
  const [rightDoorStatus, setRightDoorStatus] = useState("Open");

  return (
    <div className="side-doors-container">
      {/* Left Door Status */}
      <div className="door-box left-door">
        <h3>Left Door</h3>
        <p className="status-row">
          <span>Status</span>
          <span className="status">{leftDoorStatus}</span> {/* Using the variable */}
        </p>
        <p>(Open/Close/Opening/Closing)</p>
      </div>

      {/* Right Door Status */}
      <div className="door-box right-door">
        <h3>Right Door</h3>
        <p className="status-row">
          <span>Status</span>
          <span className="status">{rightDoorStatus}</span> {/* Using the variable */}
        </p>
        <p>(Open/Close/Opening/Closing)</p>
      </div>

      {/* Car Image */}
      <div className="car-image-container13">
        <img src="/images/car13image.svg" alt="Car" className="car-image13" />
      </div>
    </div>
  );
};

export default SideDoors;
