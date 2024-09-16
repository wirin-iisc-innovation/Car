import React, { useState } from "react";

const NewComponent: React.FC = () => {
  // State variables for door statuses
  const [firstDoorStatus, setFirstDoorStatus] = useState("Open");
  const [secondDoorStatus, setSecondDoorStatus] = useState("Open");

  return (
    <div className="new-doors-container">
      {/* First Door Status */}
      <div className="new-door-box first-door">
        <h3>First Door</h3>
        <p>Status</p>
        <p>(Open/Close/Opening/Closing)</p>
        <p className="new-status">{firstDoorStatus}</p> {/* Using the variable */}
      </div>

      {/* Second Door Status */}
      <div className="new-door-box second-door">
        <h3>Second Door</h3>
        <p>Status</p>
        <p>(Open/Close/Opening/Closing)</p>
        <p className="new-status">{secondDoorStatus}</p> {/* Using the variable */}
      </div>

      {/* Car Image */}
      <div className="new-car-image-container">
        <img src="/images/car13image.svg" alt="Car" className="new-car-image" />
      </div>
    </div>
  );
};

export default NewComponent;
