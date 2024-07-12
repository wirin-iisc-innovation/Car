import React from 'react';

const Start: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="left-section">
          <div className="time-date-weather">
            <div className="time-date">
              <div className="time">12:45 PM</div>
              <div className="date">Sunday, 5 May</div>
            </div>
            <div className="weather">
            <img src="/images_mode/tabler_sun-filled.svg" alt="Weather Icon" />
              <span>23°C / 27°C</span>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="connectivity-icons">
          <div className="icon wifi-icon" style={{backgroundImage: "url('images_mode/signal.svg')"}}></div>
            <div className="icon bluetooth-icon" style={{backgroundImage: "url('images_mode/bluetooth.svg')"}}></div>
            <div className="icon signal-icon" style={{backgroundImage: "url('images_mode/5g.svg')"}}></div>
          </div>
        </div>
      </header>

      <main className="main-content" role="main">
        <div className="start-screen">
          <div className="chevrons left-chevrons">
            {[...Array(11)].map((_, i) => (
              <div key={`left-chevron-${i}`} className="chevron"></div>
            ))}
          </div>
          <div className="start-button">
            <div className="start-circle">
              <span className="start-text">START</span>
              <span className="mode-text">AUTO MODE</span>
            </div>
          </div>
          <div className="chevrons right-chevrons">
            {[...Array(10)].map((_, i) => (
              <div key={`right-chevron-${i}`} className="chevron"></div>
            ))}
          </div>
        </div>
      </main>

      <div className="battery-info-bar">
        <div className="battery-info">
          <div className="remaining">
            <span id="distance" className="remaining-km">204</span>
            <span className="unit">km</span>
            <div className="remaining-text">Remaining</div>
          </div>
          <div className="battery">
            <span id="battery" className="battery-percentage">85</span>
            <span className="unit">%</span>
            <div className="battery-text">Battery</div>
          </div>
          <div className="average">
            <span id="average" className="avg-wh">128</span>
            <span className="unit">Wh/km</span>
            <div className="average-text">Average</div>
          </div>
        </div>
        <div className="battery-bar-container">
          <div className="battery-bar-base">
            <div id="battery-bar-fill" className="battery-bar-fill"></div>
          </div>
        </div>
      </div>

      <div className="toolbar"></div>
    </div>
  );
};

export default Start;