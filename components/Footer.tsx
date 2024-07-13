import React, { useState } from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const [isAcPopupVisible, setAcPopupVisible] = useState(false);
  const [temperature, setTemperature] = useState(24);
  const [fanSpeed, setFanSpeed] = useState(3);

  const toggleAcPopup = () => {
    setAcPopupVisible(!isAcPopupVisible);
  };

  return (
    <>
      <footer className="footer">
        <div className="toolbar">
          <Link href="/mode" legacyBehavior>
            <a>
              <button
                className="icon-button"
                style={{ backgroundImage: `url('images/Group 4548.svg')` }}
              ></button>
            </a>
          </Link>
          <Link href="/page2" legacyBehavior>
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
          <Link href="/dashboard" legacyBehavior>
            <a>
              <button
                className="icon-button"
                style={{ backgroundImage: `url('images/tesla.svg')` }}
              ></button>
            </a>
          </Link>
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
          <Link href="/page3" legacyBehavior>
            <a>
              <button
                className="icon-button"
                style={{ backgroundImage: `url('images/Group 427318961.svg')` }}
              ></button>
            </a>
          </Link>
        </div>
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
                        className={`dot ${fanSpeed >= speed ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
