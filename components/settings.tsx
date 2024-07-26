import React, { useState } from 'react';

const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Service');
  const [steeringMode, setSteeringMode] = useState('sport');
  const [regenBraking, setRegenBraking] = useState('low');
  const [tractionControl, setTractionControl] = useState('slip start');
  const [visibilityMode, setVisibilityMode] = useState('night');
  const [distanceFormatting, setDistanceFormatting] = useState('miles');
  const [temperatureFormatting, setTemperatureFormatting] = useState('°c');
  const [brightness, setBrightness] = useState(10);

  const handleBrightnessChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrightness(Number(event.target.value));
  };

  return (
    <div className="main-content3">
      <div className="sidebar">
        <button className={`sidebar-button ${activeTab === 'Quick Controls' ? 'active' : ''}`} onClick={() => setActiveTab('Quick Controls')}>
          <img src="images_set/quick controls (1).svg" alt="Quick Controls" className="sidebar-icon" />
          Quick Controls
        </button>
        <button className={`sidebar-button ${activeTab === 'Lights' ? 'active' : ''}`} onClick={() => setActiveTab('Lights')}>
          <img src="images_set/lights (1).svg" alt="Lights" className="sidebar-icon" />
          Lights
        </button>
        <button className={`sidebar-button ${activeTab === 'Locks' ? 'active' : ''}`} onClick={() => setActiveTab('Locks')}>
          <img src="images_set/lock.svg" alt="Locks" className="sidebar-icon" />
          Locks
        </button>
        <button className={`sidebar-button ${activeTab === 'Display' ? 'active' : ''}`} onClick={() => setActiveTab('Display')}>
          <img src="images_set/display.svg" alt="Display" className="sidebar-icon" />
          Display
        </button>
        <button className={`sidebar-button ${activeTab === 'Driving' ? 'active' : ''}`} onClick={() => setActiveTab('Driving')}>
          <img src="images_set/model3-icon-small.svg" alt="Driving" className="sidebar-icon" />
          Driving
        </button>
        <button className={`sidebar-button ${activeTab === 'Autopilot' ? 'active' : ''}`} onClick={() => setActiveTab('Autopilot')}>
          <img src="images_set/steering wheel-small.svg" alt="Autopilot" className="sidebar-icon" />
          Autopilot
        </button>
        <button className={`sidebar-button ${activeTab === 'Safety & Security' ? 'active' : ''}`} onClick={() => setActiveTab('Safety & Security')}>
          <img src="images_set/safety and security.svg" alt="Safety & Security" className="sidebar-icon" />
          Safety & Security
        </button>
        <button className={`sidebar-button ${activeTab === 'Service' ? 'active' : ''}`} onClick={() => setActiveTab('Service')}>
          <img src="images_set/service.svg" alt="Service" className="sidebar-icon" />
          Service
        </button>
      </div>
      <div className="settings">
        {activeTab === 'Service' ? (
          <>
            <button className="wiper-service-mode-button">
              <img src="images_set/wiper.svg" alt="Wiper Service Mode" className="button-icon" />
              <span className="button-text">wiper service mode</span>
            </button>
            <button className="adjust-headlights-button">
              <img src="images_set/headlights-small.svg" alt="Adjust Headlights" className="button-icon" />
              <span className="button-text">ADJUST HEADLIGHTS</span>
            </button>
            <button className="headlight-reset-button">
              <img src="images_set/headlights-small.svg" alt="Headlight Reset" className="button-icon" />
              <span className="button-text">HEADLIGHT RESET</span>
            </button>
          </>
        ) : activeTab === 'Locks' ? (
          <>
            <div className="setting-option">
              <span>Walk Up Unlock</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="setting-option">
              <span>Walk Away Unlock</span>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
            <div className="setting-option">
              <span>Child Protection Lock</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="setting-option">
              <span>Unlock on Park</span>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
          </>
        ) : activeTab === 'Driving' ? (
          <>
            <div className="settings-group">
              <div className="settings-group-title">Steering Mode</div>
              <div className="settings-options">
                <button className={`settings-option-l ${steeringMode === 'comfort' ? 'active' : ''}`} onClick={() => setSteeringMode('comfort')}>comfort</button>
                <button className={`settings-option-m ${steeringMode === 'sport' ? 'active' : ''}`} onClick={() => setSteeringMode('sport')}>sport</button>
                <button className={`settings-option-r ${steeringMode === 'standard' ? 'active' : ''}`} onClick={() => setSteeringMode('standard')}>standard</button>
              </div>
            </div>
    
            <div className="settings-group">
              <div className="settings-group-title">Regenerative Braking</div>
              <div className="settings-options">
                <button className={`settings-option-l2 ${regenBraking === 'standard' ? 'active' : ''}`} onClick={() => setRegenBraking('standard')}>standard</button>
                <button className={`settings-option-r2 ${regenBraking === 'low' ? 'active' : ''}`} onClick={() => setRegenBraking('low')}>low</button>
                <div className="settings-description-regenerative">
                  Standard increases range and extends battery life
                </div>
              </div>
            </div>
    
            <div className="settings-group">
              <div className="settings-group-title">Traction Control</div>
              <div className="traction-control">
                <div className="traction-control-option">
                  <button className={`traction-control-button ${tractionControl === 'slip start' ? 'active' : ''}`} onClick={() => setTractionControl('slip start')}>slip start</button>
                  <div className="settings-description-traction">
                    Used to help vehicle stuck in sand, snow, or mud
                  </div>
                </div>
                <div className="traction-control-option">
                  <button className={`traction-control-button ${tractionControl === 'creep' ? 'active' : ''}`} onClick={() => setTractionControl('creep')}>creep</button>
                  <div className="settings-description-traction">
                    Slowly move forward when the brake pedal is released
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : activeTab === 'Display' ? (
          <>
            <div className="settings-group">
              <div className="settings-group-title">Visibility Mode</div>
              <div className="settings-options">
                <button className={`settings-option-l ${visibilityMode === 'auto' ? 'active' : ''}`} onClick={() => setVisibilityMode('auto')}>auto</button>
                <button className={`settings-option-m ${visibilityMode === 'day' ? 'active' : ''}`} onClick={() => setVisibilityMode('day')}>day</button>
                <button className={`settings-option-r ${visibilityMode === 'night' ? 'active' : ''}`} onClick={() => setVisibilityMode('night')}>night</button>
              </div>
            </div>
    
            <div className="settings-group">
              <div className="settings-group-title">Display Brightness</div>
              <div className="settings-options">
                <div className="brightness-slider">
                  <input type="range" min="0" max="100" value={brightness} onChange={handleBrightnessChange} />
                  <div className="slider-thumb-text">{brightness}%</div>
                </div>
              </div>
            </div>
    
            <div className="settings-group">
              <div className="settings-group-title">Distance Formatting</div>
              <div className="settings-options">
                <button className={`settings-option-l2 ${distanceFormatting === 'miles' ? 'active' : ''}`} onClick={() => setDistanceFormatting('miles')}>miles</button>
                <button className={`settings-option-r2 ${distanceFormatting === 'km' ? 'active' : ''}`} onClick={() => setDistanceFormatting('km')}>km</button>
              </div>
            </div>
    
            <div className="settings-group">
              <div className="settings-group-title">Temperature Formatting</div>
              <div className="settings-options">
                <button className={`settings-option-l2 ${temperatureFormatting === '°c' ? 'active' : ''}`} onClick={() => setTemperatureFormatting('°c')}>°c</button>
                <button className={`settings-option-r2 ${temperatureFormatting === '°f' ? 'active' : ''}`} onClick={() => setTemperatureFormatting('°f')}>°f</button>
              </div>
            </div>
          </>
        ) : (
          <div className="settings-content">{activeTab}</div>
        )}
      </div>
    </div>
  );
};

export default MainContent;