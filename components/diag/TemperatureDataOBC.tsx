import React from 'react';

interface TemperatureData2Props {
  temperature2: number;
  isGood: boolean;
}

const TemperatureData2: React.FC<TemperatureData2Props> = ({ temperature2, isGood }) => {
  return (
    <div className="voltage-current-container">
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car"/>
      </div>
      <div className="temp-data">
        <div className="panel-title">OBC Temperature</div>
        <br></br>
        <br></br>
        <div className="panel-info">Current temp</div>
        <div className="temperature-value">{temperature2} C</div>
        <div className="temp-data-image">
            <img src={isGood ? "/images/Good cell.svg" : "/images/Poor cell.svg"} alt={isGood ? "TempSuccess" : "TempWarning"} />
        </div>
        <div className="temp-line"></div>
      </div>
    </div>
  );
};

export default TemperatureData2;
