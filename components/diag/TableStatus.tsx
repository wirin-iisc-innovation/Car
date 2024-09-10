// table-lighting.tsx
import React, { useState } from 'react';

const TableStatusm: React.FC = () => {
  const [TableStatus, setTableStatus] = useState('Open');
  const [TableLampState, setTableLampState] = useState('ON');
  const [TableHeight, setTableHeight] = useState(40);
  const [TableLampBrightness, setTableLampBrightness] = useState(40);

  const handleCaptainSeatPosition = (position: string) => {
    setTableStatus(position);
  };

  const handleCoCaptainSeatPosition = (position: string) => {
    setTableLampState(position);
  };

  return (
    <div className="seating-lights-container">
      <div className="table-status-box">
        <h2>Table Status</h2>
        <div className="table-lighting-item">
          <span className="table-lighting-label">Table Status (Open/Close/Opening/Closing/ Error)</span>
          <span className="table-lighting-status">{TableStatus}</span>
        </div>
        <div className="table-lighting-item">
          <span className="table-lighting-label">Table Height</span>
          <span className="table-lighting-status-detail">{TableHeight}%</span>
        </div>
      </div>
      <div className="table-lighting-box">
        <h2>Table Lighting</h2>
        <div className="table-lighting-item">
          <span className="table-lighting-label">Table Lamp State</span>
          <br/>
          <span className="table-lighting-status">{TableLampState}</span>
        </div>
        <div className="table-lighting-item">
          <span className="table-lighting-label">Table Lamp Brightness</span>
          <span className="table-lighting-status-detail">{TableLampBrightness}%</span>
        </div>
      </div>
      <div className="car-image-table-lighting">
        <img src="/images/Car image2.svg" alt="Car"/>
        <img src="/images/Group 427319068.svg" alt="Arrow" className="arrow-table-lighting1" />
        <img src="/images/Line 44.svg" alt="Arrow2" className="arrow-table-lighting2" />
      </div>
    </div>
  );
};

export default TableStatusm;
