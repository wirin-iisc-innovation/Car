// Seating.tsx
import React, { useState } from 'react';

const Seating: React.FC = () => {
  const [captainSeatPosition, setCaptainSeatPosition] = useState('Front');
  const [coCaptainSeatPosition, setCoCaptainSeatPosition] = useState('Front');
  const [captainBackrestPosition, setCaptainBackrestPosition] = useState(40);
  const [coCaptainBackrestPosition, setCoCaptainBackrestPosition] = useState(40);

  const handleCaptainSeatPosition = (position: string) => {
    setCaptainSeatPosition(position);
  };

  const handleCoCaptainSeatPosition = (position: string) => {
    setCoCaptainSeatPosition(position);
  };

  return (
    <div className="seating-lights-container">
      <div className="captain-seat-container">
        <h2>Captain Seat</h2>
        <br/>
        <div className="seating-item">
          <span className="seating-label">Facing Positon (Front/Back/Side/Rotating)</span>
          <span className="seating-status">{captainSeatPosition}</span>
        </div>
        <div className="seating-item">
          <span className="seating-label">Backrest Positions</span>
          <span className="seating-status-detail">{captainBackrestPosition}%</span>
        </div>
      </div>
      <div className="co-captain-seat-container">
        <h2>Co Captain Seat</h2>
        <br/>
        <div className="seating-item">
          <span className="seating-label">Facing Positon (Front/Back/Side/Rotating)</span>
          <span className="seating-status">{captainSeatPosition}</span>
        </div>
        <div className="seating-item">
          <span className="seating-label">Backrest Positions</span>
          <span className="seating-status-detail">{captainBackrestPosition}%</span>
        </div>
      </div>
      <div className="car-image-seating">
        <img src="/images/Car image1.svg" alt="Car"/>
        <img src="/images/Group 427319068.svg" alt="Arrow" className="arrow-seating1" />
        <img src="/images/Line 44.svg" alt="Arrow2" className="arrow-seating2" />
      </div>
    </div>
  );
};

export default Seating;
