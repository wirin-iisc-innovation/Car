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
        <h3>Front Right Wheel</h3>
        <p>Tyre Pressure (0 to 50 psi)</p>
        <p>{frontRightPressure} psi</p> {/* Using the variable */}
      </div>

      {/* Front Left Wheel */}
      <div className="tyre-box front-left">
        <h3>Front Left Wheel</h3>
        <p>Tyre Pressure (0 to 50 psi)</p>
        <p>{frontLeftPressure} psi</p> {/* Using the variable */}
      </div>

      {/* Back Right Wheel */}
      <div className="tyre-box back-right">
        <h3>Back Right Wheel</h3>
        <p>Tyre Pressure (0 to 50 psi)</p>
        <p>{backRightPressure} psi</p> {/* Using the variable */}
      </div>

      {/* Back Left Wheel */}
      <div className="tyre-box back-left">
        <h3>Back Left Wheel</h3>
        <p>Tyre Pressure (0 to 50 psi)</p>
        <p>{backLeftPressure} psi</p> {/* Using the variable */}
      </div>

      {/* Car Image */}
      <div className="car12-image-container">
        <img src="/images/Group 427319102.svg" alt="Car" className="car12-image" />
      </div>
    </div>
  );
};

export default Tyres;
