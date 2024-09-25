import React, { useState, useRef } from 'react';

interface BatteryVoltageGridProps {
    onClose: () => void;
}

const FullScreenGrid: React.FC<BatteryVoltageGridProps> = ({ onClose }) => {
    const cellValues = [3.8, 3.7, 3.9, 3.6, 3.8, 3.7, 3.9, 3.6, 3.8, 3.7, 3.9, 3.6, 3.8, 3.7, 3.9, 3.6, 3.8, 3.7, 3.9, 3.6, 3.8, 3.7, 3.9]; 

    const gridRef = useRef<HTMLDivElement>(null);

    const scrollGrid = (direction: 'up' | 'down') => {
    if (gridRef.current) {
        gridRef.current.scrollBy({
        top: direction === 'up' ? -100 : 100,
        behavior: 'smooth',
        });
    }
    };

    return (
    <div className="battery-voltage-fullscreen">
        <div className="battery-voltage-container">
        <button onClick={onClose} style={{ padding: '5px', fontSize: '30px', transform: 'translate(2400%,-70%)',background:'transparent', color:'white',border:'None' }}>x</button>

        <div className="grid-container" ref={gridRef}>
            <div className="grid-header">Cell Number</div>
            <div className="grid-header">Cell Value</div>

            {cellValues.map((value, index) => (
            <React.Fragment key={index}>
                <div className="grid-item">Cell {index + 1}</div>
                <div className="grid-item">{value} V</div>
            </React.Fragment>
            ))}
        </div>

        </div>
    </div>
    );
};

export default FullScreenGrid;
