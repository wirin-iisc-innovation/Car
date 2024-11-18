import React, {useEffect, useState} from 'react';

const ExternalLighting: React.FC = () => {
    const [HeadlightsStatus, setHeadlightsStatus] = useState('ON');
    const [TailLightsStatus, setTailLightsStatus] = useState('ON');
    const [BrakeLightsStatus, setBrakeLightsStatus] = useState('OFF');
    const [TurnSignalsStatus, setTurnSignalsStatus] = useState('OFF');
    const [FogLightsStatus, setFogLightsStatus] = useState('ON');

    useEffect(() =>{
      console.log("Setting up ExternalLighting hooks")

      const updateFunction = () => {
        fetch('http://0.0.0.0:5001/ext_lighting')
          .then(async response => {
            const data = await response.json()
            console.log("External Lighing data: ")
            console.log(data)   

            const ext = data["External"]
            const headlights = ext["HeadLights"]["Status"]
            const taillights = ext["TailLights"]["Status"]
            const breaklights = ext["BreakLights"]["Status"]
            const turnsignals = ext["TurnSignals"]["Status"]
            const foglights = ext["FogLights"]["Status"]
            
            const status = (stat: number) => stat ? "ON" : "OFF"

            setHeadlightsStatus(status(headlights))
            setTailLightsStatus(status(taillights))
            setBrakeLightsStatus(status(breaklights))
            setTurnSignalsStatus(status(turnsignals))
            setFogLightsStatus(status(foglights))
        })
      }
      const id = setInterval(updateFunction, 1000)
      return () => clearInterval(id)
    })

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
        <img src="/images/Group 427319068.svg" alt="Arrow2" className="arrow-external-lighting-image" />
      </div>
    </div>
  );
};

export default ExternalLighting;
