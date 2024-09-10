import React from 'react';

interface CellVoltageProps {
  avgVoltage: number;
  minVoltage: number;
  maxVoltage: number;
  minCellCount: number;
  maxCellCount: number;
}

const CellVoltage: React.FC<CellVoltageProps> = ({ avgVoltage, minVoltage, maxVoltage, minCellCount, maxCellCount }) => {
  return (
    <div className="voltage-current-container">
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car" />
      </div>
      <div className="cell-voltage">
        <div className="panel-title">Cell Voltages</div>
        <div className="panel-info">Avg Cell</div>
        <div className="panel-info">Voltage (0 to</div>
        <div className="panel-info">5 V)</div>
        <br></br>
        <div className="panel-info">Min Cell</div>
        <div className="panel-info">Voltage</div>
        <br></br>
        <div className="panel-info">Max Cell</div>
        <div className="panel-info">Voltage</div>
        <br></br>
        <div className="panel-info">Min/Max</div>
        <div className="panel-info">Voltage Cell</div>
        <div className="panel-info">Count</div>
        <div className="cell-voltage-line"></div>
        <div className="voltage-value-avg">{avgVoltage} V</div>
        <div className="voltage-value-min">{minVoltage} V</div>
        <div className="voltage-value-max">{maxVoltage} V</div>
        <div className="min-max">{minCellCount} cells min / {maxCellCount} cells max</div>
      </div>
    </div>
  );
};

export default CellVoltage;
