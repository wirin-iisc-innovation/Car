import React from 'react';

interface BatteryStatusProps {
  errorImage: string;
  batteryStatus: string;
  lastErrorCode: string;
  lastErrorTime: string;
  batteryCapacity: string;
}

const BatteryStatus: React.FC<BatteryStatusProps> = ({ 
  errorImage, 
  batteryStatus, 
  lastErrorCode, 
  lastErrorTime, 
  batteryCapacity 
}) => {
  return (
    <div className="voltage-current-container">
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car" />
      </div>
      <div className="status-battery-error">
        <div className="panel-title">Battery Error Status</div>
        <br></br>
        <div className="error-status-image">
          <img src={errorImage} alt="Error Status" />
        </div>
        <div className="battery-working">{batteryStatus}</div>
        <div className="panel-info">Last Error</div>
        <div className="panel-info">Code: {lastErrorCode}</div>
        <div className="panel-info">on {lastErrorTime}</div>  
        <button className="check-history">
          <img src="images/Error Status.svg" alt="CheckHistory"/>
        </button>      
      </div>
      <div className="battery-capacity">
        <div className="panel-title">Battery Capacity</div>
        <div className="panel-info">Est. Battery</div>
        <div className="panel-info">Capacity (0 to</div>
        <div className="panel-info">300Ah)</div>
        <div className="status-panel-value">{batteryCapacity} Ah</div>
      </div>
    </div>
  );
};

export default BatteryStatus;
