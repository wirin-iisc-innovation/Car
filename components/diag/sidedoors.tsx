import React from "react";

const SideDoors: React.FC = () => {
  return (
    <div className="side-doors-container">
      {/* Left Door Status */}
      <div className="door-box left-door">
        <h3>Left Door</h3>
        <p className="status-row">
          <span>Status</span>
          <span className="status">Open</span>
        </p>
        <p>(Open/Close/Opening/Closing)</p>
      </div>

      {/* Right Door Status */}
      <div className="door-box right-door">
        <h3>Right Door</h3>
        <p className="status-row">
          <span>Status</span>
          <span className="status">Open</span>
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
