import React, {useState} from 'react';

const ExternalLighting: React.FC = () => {
    const [HeadlightsStatus, setHeadlightsStatus] = useState('ON');
    const [TailLightsStatus, setTailLightsStatus] = useState('ON');
    const [BrakeLightsStatus, setBrakeLightsStatus] = useState('OFF');
    const [TurnSignalsStatus, setTurnSignalsStatus] = useState('OFF');
    const [FogLightsStatus, setFogLightsStatus] = useState('ON');
  return (
    <div className="external-lighting-box">
      <h2>External Lighting</h2>
      <br/>
      <div className="lighting-item">
        <span className="lighting-label">Headlights</span>
        <span className="lighting-status">{HeadlightsStatus}</span>
      </div>
      <div className="lighting-item">
        <span className="lighting-label">Tail Lights</span>
        <span className="lighting-status">{TailLightsStatus}</span>
      </div>
      <div className="lighting-item">
        <span className="lighting-label">Brake Lights</span>
        <span className="lighting-status">{BrakeLightsStatus}</span>
      </div>
      <div className="lighting-item">
        <span className="lighting-label">Turn Signals</span>
        <span className="lighting-status">{TurnSignalsStatus}</span>
      </div>
      <div className="lighting-item">
        <span className="lighting-label">Fog Lights</span>
        <span className="lighting-status">{FogLightsStatus}</span>
      </div>
      <div className="car-external-lighting-container">
        <img src="/images/Car image1.svg" alt="Car2" className="car-image-external-lighting" />
        <img src="/images/Group 427319068.svg" alt="Arrow3" className="arrow-external-lighting-image" />
      </div>
    </div>
  );
};

export default ExternalLighting;
