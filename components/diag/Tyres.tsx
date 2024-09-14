import React from "react";


const Tyres: React.FC = () => {
  return (
    <div className="tyres-container">
      {/* Front Right Wheel */}
      <div className="tyre-box front-right">
        <h3>Front Right Wheel</h3>
        <p>Tyre Pressure (0 to 50 psi)</p>
        <p>45psi</p>
      </div>

      {/* Front Left Wheel */}
      <div className="tyre-box front-left">
        <h3>Front Left Wheel</h3>
        <p>Tyre Pressure (0 to 50 psi)</p>
        <p>45psi</p>
      </div>

      {/* Back Right Wheel */}
      <div className="tyre-box back-right">
        <h3>Back Right Wheel</h3>
        <p>Tyre Pressure (0 to 50 psi)</p>
        <p>45psi</p>
      </div>

      {/* Back Left Wheel */}
      <div className="tyre-box back-left">
        <h3>Back Left Wheel</h3>
        <p>Tyre Pressure (0 to 50 psi)</p>
        <p>45psi</p>
      </div>

      {/* Car Image */}
      <div className="car12-image-container">
        <img src="/images/Group 427319102.svg" alt="Car" className="car12-image" />
      </div>
    </div>
  );
};

export default Tyres;
