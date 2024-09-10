import React from 'react';

interface OBCStatusProps {
  errorStatus: string;
  errorCode: string;
  errorDate: string;
  isWorkingFine: boolean;
}

const OBCStatus: React.FC<OBCStatusProps> = ({ errorStatus, errorCode, errorDate, isWorkingFine }) => {
  return (
    <div className="voltage-current-container">
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car" />
      </div>
      <div className="status-battery-error">
        <div className="panel-title">OBC Error Status</div>
        <br />
        <div className="error-status-image">
          <img src={isWorkingFine ? "images/Good cell.svg" : "images/Poor cell.svg"} alt="StatusImage" />
        </div>
        <div className="battery-working">
          {isWorkingFine ? "Currently Working Fine." : "Error Detected."}
        </div>
        <div className="panel-info">Last Error</div>
        <div className="panel-info">Code: {errorCode}</div>
        <div className="panel-info">on {errorDate}</div>  
        <button className="check-history">
          <img src="images/Error Status.svg" alt="CheckHistory" />
        </button>      
      </div>
    </div>
  );
};

export default OBCStatus;
