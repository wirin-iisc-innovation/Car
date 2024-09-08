import React, { useState } from 'react';

const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('recent');
  const [input, setInput] = useState<string>('');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleKeypadClick = (value: string) => {
    if (value === 'back') {
      setInput((prevInput) => prevInput.slice(0, -1)); // Remove the last character
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <main className="main-content">
     
      <div className="call-screen">
        <div className="keypad-section">
          <div className="keypad-top">
            <button className="keypad-top-button">
              <img src="/images_call/user-add-plus--actions-add-close-geometric-human-person-plus-single-up-user.svg" alt="Add" />
            </button>
            <div className="keypad-input">{input}</div>
            <button 
              className="keypad-top-button" 
              onClick={() => handleKeypadClick('back')}
            >
              <img src="/images_call/arrow-up-1--arrow-up-keyboard.svg" alt="Back" />
            </button>
          </div>
          <div className="separator"></div> {/* Thin white line */}
          <div className="keypad">
            <div className="keypad-row">
              <button className="keypad-button" onClick={() => handleKeypadClick('1')}>1</button>
              <button className="keypad-button" onClick={() => handleKeypadClick('2')}>2</button>
              <button className="keypad-button" onClick={() => handleKeypadClick('3')}>3</button>
            </div>
            <div className="keypad-row">
              <button className="keypad-button" onClick={() => handleKeypadClick('4')}>4</button>
              <button className="keypad-button" onClick={() => handleKeypadClick('5')}>5</button>
              <button className="keypad-button" onClick={() => handleKeypadClick('6')}>6</button>
            </div>
            <div className="keypad-row">
              <button className="keypad-button" onClick={() => handleKeypadClick('7')}>7</button>
              <button className="keypad-button" onClick={() => handleKeypadClick('8')}>8</button>
              <button className="keypad-button" onClick={() => handleKeypadClick('9')}>9</button>
            </div>
            <div className="keypad-row">
              <button className="keypad-button" onClick={() => handleKeypadClick('*')}>*</button>
              <button className="keypad-button" onClick={() => handleKeypadClick('0')}>0</button>
              <button className="keypad-button" onClick={() => handleKeypadClick('#')}>#</button>
            </div>
          </div>

          {/* Call button */}
          <div className="call-button-container">
            <button className="call-button">
              <img src="/images_call/material-symbols_call.svg" alt="Call" />
              Call
            </button>
          </div>
        </div>
        
        <div className="contact-section">
          <div className="tab-buttons">
            <button 
              className={`tab-button ${activeTab === 'recent' ? 'active' : ''}`} 
              onClick={() => handleTabClick('recent')}
            >
              <img className="tab-icon" src="/images_call/circle-clock--clock-loading-measure-time-circle.svg" alt="Recent" />
              Recent
            </button>
            <button 
              className={`tab-button ${activeTab === 'contacts' ? 'active' : ''}`} 
              onClick={() => handleTabClick('contacts')}
            >
              <img className="tab-icon" src="/images_call/user-multiple-group--close-geometric-human-multiple-person-up-user.svg" alt="Contacts" />
              Contacts
            </button>
          </div>
          <div className="contact-list">
            {activeTab === 'recent' ? (
              <>
                <p>Mom</p>
                <p>Ron Weasley</p>
              </>
            ) : (
              <>
                <p>Albus D</p>
                <p>Alastor Moody</p>
                <p>Cedric Diggory</p>
                <p>Cho Chang</p>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
