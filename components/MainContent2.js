import React from 'react';

const MainContent = () => {
    return (
        <main className="main-content">
            <div className="car-diagnostics">
                <img src="/images/diagnostics.png" alt="Car Diagnostics" className="car-image hidden fade-in-car-image" />
                <p className="text-insert1">Running background checks...</p>
                <p className="text-insert2 hidden">Setting up connectivity...</p>
                <p className="text-insert3 hidden">Wipod ready to drive</p>
                <div className="status-dots hidden fade-in-dots">
                    <span className="dot green"></span>
                    <span className="dot yellow color-change1"></span>
                    <span className="dot yellow color-change2"></span>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
