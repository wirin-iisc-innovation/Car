import React from "react";
import router, {useRouter} from "next/router";
import { useNavigate } from "react-router-dom";

const FullScreen: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const navigate = useNavigate();


  
  const handleDiagnosticsClick = () => {
    router.push('/diag'); // Redirect to the "diag" page
  };

  const handleParkingAssistClick = () => {
    /*router.push("/parking-assist"); // Navigates to the Parking Assist page*/
  };

  const handleEmergencyStopClick = () => {
    /*router.push("/emergency-stop"); // Navigates to the Emergency Stop page*/
  };

  const handleModeSwitchClick = () => {
    router.push("/mode"); // Navigates to the Mode Switch page
  };

  const handleCarControlsClick = () => {
    /*navigate("/car-controls"); // Navigates to the Car Controls page*/
  };

  return (
    <div className="fullscreen-popup-container">
      <div className="fullscreen-popup">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="popup-content">
          <div
            className="icon-container diagnostics"
            onClick={handleDiagnosticsClick}
          >
            <img src="images_fullpage/Diagnostics.svg" alt="Diagnostics" />
            <span>Diagnostics</span>
          </div>
          <div
            className="icon-container parking-assist"
            onClick={handleParkingAssistClick}
          >
            <img src="images_fullpage/Group.svg" alt="Parking Assist" />
            <span>Parking Assist</span>
          </div>
          <div
            className="icon-container emergency-stop"
            onClick={handleEmergencyStopClick}
          >
            <img src="images_fullpage/Vector3.svg" alt="Emergency Stop" />
            <span>Emergency Stop</span>
          </div>
          <div
            className="icon-container mode-switch"
            onClick={handleModeSwitchClick}
          >
            <img
              src="images_fullpage/Group 427319020.svg"
              alt="Mode Switch"
            />
            <span>Mode Switch</span>
          </div>
          <div
            className="icon-container car-controls"
            onClick={handleCarControlsClick}
          >
            <img src="images_fullpage/Vector2.svg" alt="Car Controls" />
            <span>Car Controls</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreen;