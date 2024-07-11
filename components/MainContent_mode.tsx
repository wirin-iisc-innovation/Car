import React from 'react';

const MainContent = () => {
    return (
        <main className="main-content">
            <p className="select-mode-text">Select a mode to start driving</p>
            <div className="mode-buttons">
                <div className="mode-button">
                    <img src="/images/Drive Glow.svg" alt="Drive Icon" />
                </div>
                <div className="mode-button">
                    <img src="/images/parked.svg" alt="Parked Icon" />
                </div>
                <div className="mode-button">
                    <img src="/images/auto.svg" alt="Auto Icon" />
                </div>
            </div>
            <div className="battery-info-bar">
                <div className="battery-info">
                    <p className="remaining-km">232 km</p>
                    <p className="unit remaining-text">Remaining</p>
                    <p className="battery-percentage">97%</p>
                    <p className="unit battery-text">Battery</p>
                    <p className="avg-wh">110 Wh/km</p>
                    <p className="unit average-text">Average</p>
                </div>
                <div className="battery-bar-container">
                    <div className="battery-bar-base"></div>
                    <div className="battery-bar-fill"></div>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
