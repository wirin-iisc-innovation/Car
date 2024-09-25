import React, { useState } from "react";
import BatteryVoltageGrid from "./BatteryVoltageGrid";

interface VoltageCurrentContentProps {
  currentDrawn: number;
  batteryVoltage: number;
}

const VoltageCurrentContent: React.FC<VoltageCurrentContentProps> = ({
  currentDrawn,
  batteryVoltage,
}) => {
  // State to show/hide the grid
  const [showGrid, setShowGrid] = useState(false);

  // Toggle grid visibility
  const toggleGrid = () => {
    setShowGrid(!showGrid);
  };

  return (
    <div className="voltage-current-container">
      <div className="car-container2">
        <img src="/images/Car image.svg" alt="Car" />
      </div>
      <div className="battery-current">
        <div className="panel-title">Battery Current</div>
        <div className="panel-info">Est. Battery</div>
        <div className="panel-info">Current drawn</div>
        <div className="panel-value">{currentDrawn} A</div>
      </div>
      <div className="battery-voltage">
        <div className="panel-title">Battery Voltage</div>
        <div className="panel-info">Est. Battery</div>
        <div className="panel-value">{batteryVoltage} V</div>
        {/* Show the battery voltage grid on click */}
        <button onClick={toggleGrid} style={{ padding: '10px', marginTop: '10px', color:'white',background:'green',border:'1px',fontSize:'16px',transform:'translate(10%,90%)' }}>
          Show All Battery Voltages
        </button>
        {/* Conditionally show the grid */}
        {showGrid && <BatteryVoltageGrid onClose={toggleGrid} />}
      </div>
    </div>
  );
};

export default VoltageCurrentContent;
