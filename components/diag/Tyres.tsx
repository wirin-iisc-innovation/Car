import React, { useState } from "react";

const Tyres: React.FC = () => {
  // State variables for tyre pressure
  const [frontRightPressure, setFrontRightPressure] = useState(45);
  const [frontLeftPressure, setFrontLeftPressure] = useState(45);
  const [backRightPressure, setBackRightPressure] = useState(45);
  const [backLeftPressure, setBackLeftPressure] = useState(45);

  return (
    <div className="tyres-container">
      {/* Front Right Wheel */}
      <div className="tyre-box front-right">
        <h2>Front Right Wheel</h2>
        <div className="tyre-box-content">
          <span className="tyre-box-detail">Tyre Pressure</span>
          <span className="tyre-box-value"> {frontRightPressure} psi</span> {/* Using the variable */}
        </div>
      </div>

      {/* Front Left Wheel */}
      <div className="tyre-box front-left">
        <h2>Front Left Wheel</h2>
        <div className="tyre-box-content">
          <span className="tyre-box-detail">Tyre Pressure</span>
          <span className="tyre-box-value"> {frontLeftPressure} psi</span> {/* Using the variable */}
        </div>
      </div>

      {/* Back Right Wheel */}
      <div className="tyre-box back-right">
        <h2>Back Right Wheel</h2>
        <div className="tyre-box-content">
          <span className="tyre-box-detail">Tyre Pressure</span>
          <span className="tyre-box-value"> {backRightPressure} psi</span> {/* Using the variable */}
        </div>
      </div>

      {/* Back Left Wheel */}
      <div className="tyre-box back-left">
        <h2>Back Left Wheel</h2>
        <div className="tyre-box-content">
          <span className="tyre-box-detail">Tyre Pressure</span>
          <span className="tyre-box-value"> {backLeftPressure} psi</span> {/* Using the variable */}
        </div>
      </div>

      {/* Car Image */}
      <div className="car12-image-container">
        <img src="/images/Group 427319102.svg" alt="Car" className="car12-image" />
      </div>
    </div>
  );
};

export default Tyres;
