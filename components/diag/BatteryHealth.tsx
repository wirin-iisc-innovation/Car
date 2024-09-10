import React from 'react';

interface BatteryHealthProps {
  temperature: number;
  goodCells: number;
  poorCells: number;
  totalCells: number;
}

const BatteryHealth: React.FC<BatteryHealthProps> = ({ temperature, goodCells, poorCells, totalCells }) => {
  return (
    <div className="voltage-current-container">
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car" />
      </div>
      <div className="battery-health">
        <div className="panel-title">Battery Health</div>
        <br></br>
        <div className="temp">Temperature</div>
        <div className="temp-value">{temperature} °C</div>
        <div className="main">
          <div className="cell-text">Good</div>
          <div className="cell-image">
            <img src="images/Good cell.svg" alt="GoodCell" />
          </div>
          <div className="cells-value">{goodCells}/{totalCells}</div>
          <div className="cells">cells</div>
        </div>
        <div className="main">
          <div className="cell-text">Poor</div>
          <div className="cell-image">
            <img src="images/Poor cell.svg" alt="PoorCell" />
          </div>
          <div className="cells-value">{poorCells}/{totalCells}</div>
          <div className="cells">cells</div>
        </div>
        <div className="battery-health-line"></div>
      </div>
    </div>
  );
};

export default BatteryHealth;
