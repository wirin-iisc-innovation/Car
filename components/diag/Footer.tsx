import React, { useState } from 'react';

// Define the function to open a new page
const openNewPage = (url: string) => {
  window.open(url, '_blank');
};

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
          <button
            className="icon-button"
            style={{ backgroundImage: `url('images/Group 4548.svg')` }}
            onClick={() => openNewPage('https://example.com/page1')}
          ></button>
          <button
            className="icon-button"
            style={{ backgroundImage: `url('images/Vector (1).svg')` }}
            onClick={() => openNewPage('https://example.com/page2')}
          ></button>
          <button
            className="icon-button"
            style={{ backgroundImage: `url('images/Group 427318962.svg')` }}
            onClick={() => openNewPage('https://example.com/page6')}
          ></button>
          <button
            className="icon-button"
            style={{ backgroundImage: `url('images/tesla.svg')` }}
            onClick={() => openNewPage('https://example.com/page4')}
          ></button>
          <button
            className="icon-button"
            style={{ backgroundImage: `url('images/Vector (2).svg')` }}
            onClick={() => openNewPage('https://example.com/page5')}
          ></button>
          <button
            className="icon-button"
            style={{ backgroundImage: `url('images/Vector (3).svg')` }}
            onClick={toggleAcPopup}
          ></button>
          <button
            className="icon-button"
            style={{ backgroundImage: `url('images/Group 427318961.svg')` }}
            onClick={() => openNewPage('https://example.com/page3')}
          ></button>
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



