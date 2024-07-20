import React from 'react';
import { useRouter } from 'next/router';

const AppPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const router = useRouter();
  const apps = [
    { name: 'YouTube', icon: 'images_pop/Group 427319037.svg' },
    { name: 'Google', icon: 'images_pop/Group 427319036.svg' },
    { name: 'Google Maps', icon: 'images_pop/Group 427319034.svg' },
    { name: 'Spotify', icon: 'images_pop/Group 427319035.svg' },
    { name: 'Chess', icon: 'images_pop/Group 427319043.svg' },
    { name: 'YouTube Music', icon: 'images_pop/Vector.svg' },
    { name: 'Play Store', icon: 'images_pop/Group 427319045.svg' },
    { name: 'Tetris', icon: 'images_pop/Group 427319046.svg' },
    { name: 'Native Maps', icon: 'images_pop/Group 427319038.svg' },
    { name: 'Phone', icon: 'images_pop/Group 427319047.svg' },
    { name: 'Netflix', icon: 'images_pop/Vector.svg' },
    { name: 'Calculator', icon: 'images_pop/Group 427319050.svg' },
    { name: 'Assistant', icon: 'images_pop/Group 427319051.svg', link: '/AI' },
  ];

  const handleAppClick = (app: { name: string; icon: string; link?: undefined; } | { name: string; icon: string; link: string; }) => {
    if (app.link) {
      router.push(app.link);
    }
  };

  return (
    <div className="app-popup-container">
      <div className="app-popup">
        <div className="app-popup-content">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <div className="search-bar">
            <input type="text" placeholder="Search for apps" />
          </div>
          <div className="app-section">
            <h3>Frequently used</h3>
            <div className="app-icons">
              {apps.slice(0, 4).map((app, index) => (
                <div className="app-icon" key={index} onClick={() => handleAppClick(app)}>
                  <img src={app.icon} alt={`${app.name} icon`} />
                  <span>{app.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="app-section">
            <div className="app-icons">
              {apps.slice(4, 12).map((app, index) => (
                <div className="app-icon" key={index} onClick={() => handleAppClick(app)}>
                  <img src={app.icon} alt={`${app.name} icon`} />
                  <span>{app.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="app-section">
            <div className="app-icons">
              {apps.slice(12).map((app, index) => (
                <div className="app-icon" key={index} onClick={() => handleAppClick(app)}>
                  <img src={app.icon} alt={`${app.name} icon`} />
                  <span>{app.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPopup;
