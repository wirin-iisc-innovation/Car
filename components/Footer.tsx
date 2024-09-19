import React, { useState } from "react";
import Link from "next/link";
import AppPopup from "./AppPopup";
import FullScreenPopup from "./Fullscreen"; // Import the FullScreenPopup component
import { useRouter } from "next/router"; // Import useRouter for back navigation

const Footer: React.FC = () => {
  const [isAcPopupVisible, setAcPopupVisible] = useState(false);
  const [isAppPopupVisible, setAppPopupVisible] = useState(false);
  const [isFullScreenPopupVisible, setFullScreenPopupVisible] = useState(false); // State for the full screen pop-up

  const [temperature, setTemperature] = useState(24);
  const [fanSpeed, setFanSpeed] = useState(3);

  const router = useRouter(); // Initialize router for navigation

  const toggleAcPopup = () => {
    setAcPopupVisible(!isAcPopupVisible);
  };

  const toggleAppPopup = () => {
    setAppPopupVisible(!isAppPopupVisible);
  };

  const toggleFullScreenPopup = () => {
    setFullScreenPopupVisible(!isFullScreenPopupVisible);
  };

  const goBack = () => {
    router.back(); // Navigate to the previous page
  };

  return (
    <>
      <footer className="footer">
        {/* Back Button on the left */}
        <button
          className="icon-button back-button" // Add a unique class for back button
          style={{ backgroundImage: `url('images/triangular.svg')` }} // Use your triangular arrow SVG
          onClick={goBack} // Go back to the previous page on click
        ></button>

        <div className="toolbar">
          <button
            className="icon-button"
            style={{ backgroundImage: `url('images/Group 4548.svg')` }}
            onClick={toggleAppPopup}
          ></button>
          <Link href="/call" legacyBehavior>
            <a>
              <button
                className="icon-button"
                style={{ backgroundImage: `url('images/Vector (1).svg')` }}
              ></button>
            </a>
          </Link>
          <Link href="/music" legacyBehavior>
            <a>
              <button
                className="icon-button"
                style={{ backgroundImage: `url('images/Group 427318962.svg')` }}
              ></button>
            </a>
          </Link>
          <button
            className="icon-button"
            style={{ backgroundImage: `url('images/tesla.svg')` }}
            onClick={toggleFullScreenPopup} // Update click handler to toggle FullScreenPopup
          ></button>
          <Link href="/maps" legacyBehavior>
            <a>
              <button
                className="icon-button"
                style={{ backgroundImage: `url('images/Vector (2).svg')` }}
              ></button>
            </a>
          </Link>
          <button
            className="icon-button"
            style={{ backgroundImage: `url('images/Vector (3).svg')` }}
            onClick={toggleAcPopup}
          ></button>
          <Link href="/settings" legacyBehavior>
            <a>
              <button
                className="icon-button"
                style={{ backgroundImage: `url('images/Group 427318961.svg')` }}
              ></button>
            </a>
          </Link>
        </div>

        {/* Add Emergency Button at the right end of the footer */}
        <button
          className="icon-button emergency-button" // Add a unique class for emergency button
          style={{ backgroundImage: `url('images/emergency.svg')` }} // Use your emergency SVG
          onClick={() => alert("Emergency!")} // Handle emergency click action
        ></button>
      </footer>
      {isAcPopupVisible && (
        <div className="ac-popup">
          <div className="ac-popup-content">
            <button className="close-button" onClick={toggleAcPopup}>
              X
            </button>
            <div className="ac-popup-body">
              <div className="temperature-control">
                <span>❆ Temperature</span>
                <div className="slider-container">
                  <span>{temperature}°C</span>
                  <input
                    type="range"
                    min="16"
                    max="30"
                    value={temperature}
                    onChange={(e) => setTemperature(parseInt(e.target.value))}
                    className="temperature-slider"
                  />
                </div>
              </div>
              <div className="fan-speed-control">
                <span>♺ Fan speed</span>
                <div className="slider-container">
                  <span>{fanSpeed}</span>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={fanSpeed}
                    onChange={(e) => setFanSpeed(parseInt(e.target.value))}
                    className="fan-speed-slider"
                  />
                  <div className="fan-speed-dots">
                    {[1, 2, 3, 4, 5].map((speed) => (
                      <span
                        key={speed}
                        className={`dot12 ${fanSpeed >= speed ? "active" : ""}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isAppPopupVisible && <AppPopup onClose={toggleAppPopup} />}{" "}
      {/* Render the AppPopup */}
      {isFullScreenPopupVisible && (
        <FullScreenPopup onClose={toggleFullScreenPopup} />
      )}{" "}
      {/* Render the FullScreenPopup */}
    </>
  );
};

export default Footer;
