import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [batteryPercentage, setBatteryPercentage] = useState(85); // Initial battery percentage
  const [remainingDistance, setRemainingDistance] = useState(204); // Initial remaining distance
  const [averageWhPerKm, setAverageWhPerKm] = useState(128); // Initial average energy consumption

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
      const formattedDate = now.toLocaleDateString('en-US', options);
      
      setTime(formattedTime);
      setDate(formattedDate);
    };

    const generateRandomBattery = () => {
      const randomBattery = Math.floor(Math.random() * 101); // Generate random battery percentage (0-100)
      setBatteryPercentage(randomBattery);
    };

    // You can simulate backend updates for remaining distance and energy consumption with this function
    const updateBackendData = () => {
      const randomDistance = Math.floor(Math.random() * 300); // Random distance between 0 and 300 km
      const randomWhPerKm = Math.floor(Math.random() * 200); // Random energy consumption between 0 and 200 Wh/km
      setRemainingDistance(randomDistance);
      setAverageWhPerKm(randomWhPerKm);
    };

    // Update time every second
    updateDateTime();
    const timeIntervalId = setInterval(updateDateTime, 1000);

    // Update battery percentage randomly every 5 seconds
    const batteryIntervalId = setInterval(generateRandomBattery, 1000);

    // Simulate backend data updates every 10 seconds
    const backendDataIntervalId = setInterval(updateBackendData, 1000);

    // Cleanup intervals when component unmounts
    return () => {
      clearInterval(timeIntervalId);
      clearInterval(batteryIntervalId);
      clearInterval(backendDataIntervalId);
    };
  }, []);

  return (
    <header className="header">
      <div className="left-section">
        <div className="time-date-weather">
          <div className="time-date">
            <p id="time">{time}</p>
            <p id="date">{date}</p>
          </div>
          <div className="weather">
            <p id="weather-icon"><img src="images/Vector (6).svg" alt="" /></p>
            <p id="temperature">23°C / 27°C</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="connectivity-icons">
          <div className="icon" style={{ backgroundImage: `url('images/Vector (4).svg')` }}></div>
          <div className="icon" style={{ backgroundImage: `url('images/Vector (5).svg')` }}></div>
          <div className="icon" style={{ backgroundImage: `url('images/Union (3).svg')` }}></div>
        </div>
        <div className="battery-info-bar">
          <div className="battery-info">
            <div className="remaining">
              <span className="remaining-km" id="distance">{remainingDistance}</span>
              <span className="unit">km</span>
              <div className="remaining-text">Remaining</div>
            </div>
            <div className="battery">
              <span className="battery-percentage" id="battery">{batteryPercentage}</span>
              <span className="unit">%</span>
              <div className="battery-text">Battery</div>
            </div>
            <div className="average">
              <span className="avg-wh" id="average">{averageWhPerKm}</span>
              <span className="unit">Wh/km</span>
              <div className="average-text">Average</div>
            </div>
          </div>
          <div className="battery-bar-container">
            <div className="battery-bar-base">
              {/* Dynamically set the height of the battery fill based on battery percentage */}
              <div
                className="battery-bar-fill"
                id="battery-bar-fill"
                style={{ height: `${batteryPercentage}%` }}  // Adjust battery fill based on percentage
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
