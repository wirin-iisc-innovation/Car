import React, { useState } from 'react';
import VoltageCurrentContent from './VoltageCurrentContent';
import ChargeLevel from './ChargeLevel';
import BatteryHealth from './BatteryHealth';
import CellVoltage from './CellVoltages';
import BatteryStatus from './BatteryStatus';
import ChargingStatus from './ChargingStatus';
import TemperatureData1 from './TemperatureDataBattery';
import AcVoltageAndCurrent from './AcVoltageAndCurrent';
import ACPower from './AcPower';
import ChargingTime from './ChargingTime';
import DcVoltageAndCurrent from './DCVoltageAndCurrent';
import OBCStatus from './OBCStatus';
import TemperatureData2 from './TemperatureDataOBC';
import LowLevelControls from './LowLevelControls';
import PIDMasterValues from './PIDMasterValues';
import PIDControls from './PIDControls';
import ControlUnit1 from './ControlUnit1';
import ControlUnit2 from './ControlUnit2';
import ControlUnit3 from './ControlUnit3';
import Seating from './Seating';
import InternalLighting from './InternalLighting';
import ExternalLighting from './ExternalLighting';
import TableStatus from './TableStatus';

const MainContent: React.FC = () => {
  const [activeSidebar, setActiveSidebar] = useState('Battery');
  const [activeMiniSidebar, setActiveMiniSidebar] = useState<string | null>(null);
  const [heartbeatStatus, setHeartbeatStatus] = useState('BEATING');
  const heartbeat1Status = 'BEATING';
  const activeStatus = 'ACTIVE';
  const activeSoulStatus = 'MAIN';
  const heartbeat2Status = 'BEATING';
  const masterControlStatus = 'ON';
  const steeringRackStatus = 'OFF';
  const brakeStatus = 'OFF';
  const motorsStatus = 'OFF';
  const autonomousStatus = 'ON';
  const manualModeStatus = 'OFF';
  const hardwareModeStatus = 'OFF';
  const steeringPIDOutput = 504;
  const brakePIDOutput = 203;
  const motorRPIDOutput1 = 2500;
  const motorRPIDOutput2 = 2500; 
  const masterPIDOutput = 350;
  const currentDrawn = 245; 
  const batteryVoltage = 67;
  const chargePercentage = 85;
  const temperature = 28;  
  const goodCells = 39;    
  const poorCells = 1;     
  const totalCells = 40; 
  const avgVoltage = 3.3;  // Example average cell voltage
  const minVoltage = 0.5;  // Example minimum cell voltage
  const maxVoltage = 4.5;  // Example maximum cell voltage
  const minCellCount = 10; // Example minimum cell count
  const maxCellCount = 12;
  const mosfetCharging = "YES";  // Example dynamic value
  const mosfetDischarging = "NO";  // Example dynamic value
  const chargerStatus = "Not connected to charger"; 
  const errorImage = "images/Good cell.svg"; // Image source dynamically
  const batteryStatus = "Currently Working Fine."; // Example dynamic value
  const lastErrorCode = "232"; // Example dynamic value
  const lastErrorTime = "23/7 15:30"; // Example dynamic value
  const batteryCapacity = "257";
  const currentTemp = "37";
  const acCurrent = "79"; // Example dynamic current value
  const acVoltage = "256"; // Example dynamic temperature value
  const acPower = "3200";
  const chargingTime = "120";
  const dcCurrent = "79";  // Example dynamic DC current value
  const dcVoltage = "46";
  const errorStatus = "Currently Working Fine.";  // Example dynamic status
  const errorCode = "232";  // Example dynamic error code
  const errorDate = "23/7 15:30";  // Example dynamic error date
  const isWorkingFine = true; 
  const temperature2 = 37;  // Example dynamic temperature value
  const isGood = true; 


  const handleSidebarClick = (category: string) => {
    setActiveSidebar(category);
    setActiveMiniSidebar(null);
  };

  const handleMiniSidebarClick = (buttonLabel: string) => {
    setActiveMiniSidebar(buttonLabel);
  };

  const miniSidebarButtons: { [key: string]: string[] } = {
    'Battery': ['Voltage and Current', 'Charge Level', 'Battery Health', 'Cell Voltages', 'Charging Status', 'Battery Status', 'Temperature Data'],
    'OBC': ['AC Voltage and Current', 'AC Power', 'Charging Time', 'DC Voltage and Current', 'OBC Status', 'Temperature Data'],
    'AC': ['Temperature', 'Fan Speed', 'AC Status'],
    'Seating and Lights': ['Seating','External Lighting', 'Internal Lighting', 'Table Status'],
    'Car Status': ['Car Mode', 'Bywire System', 'TV', 'Car Data Level1', 'Car Data Level2', 'Car Data Level3', 'Car Data Level4', 'Error Statuses'],
    'Doors and Tyres': ['Tyres', 'Side Doors', 'Roof and Boot Doors'],
    'Vehicular Control': ['Low Level Controls', 'PID Master Values', 'PID Controls', 'Control Unit 1', 'Control Unit 2', 'Control Unit 3']
  };

  const renderMiniSidebar = () => {
    return (
      <div className="mini-sidebar">
        {miniSidebarButtons[activeSidebar].map((buttonLabel) => (
          <button 
            key={buttonLabel} 
            className={`mini-sidebar-button ${activeMiniSidebar === buttonLabel ? 'active' : ''}`}
            onClick={() => handleMiniSidebarClick(buttonLabel)}
          >
            <div className="mini-sidebar-text">
              {buttonLabel}
            </div>
          </button>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    if (activeSidebar === 'Battery' && activeMiniSidebar === 'Voltage and Current') {
      return  <VoltageCurrentContent
      currentDrawn={currentDrawn}
      batteryVoltage={batteryVoltage}
    />
    }
    if (activeSidebar === 'Battery' && activeMiniSidebar === 'Charge Level') {
      return   <ChargeLevel chargePercentage={chargePercentage} />;
    }
    if (activeSidebar === 'Battery' && activeMiniSidebar === 'Battery Health') {
      return       <BatteryHealth
      temperature={temperature}
      goodCells={goodCells}
      poorCells={poorCells}
      totalCells={totalCells}
    />
    }
    if (activeSidebar === 'Battery' && activeMiniSidebar === 'Cell Voltages') {
      return      <CellVoltage 
      avgVoltage={avgVoltage} 
      minVoltage={minVoltage} 
      maxVoltage={maxVoltage} 
      minCellCount={minCellCount} 
      maxCellCount={maxCellCount} 
    />
    }
    if (activeSidebar === 'Battery' && activeMiniSidebar === 'Charging Status') {
      return       <ChargingStatus 
      mosfetCharging={mosfetCharging} 
      mosfetDischarging={mosfetDischarging} 
      chargerStatus={chargerStatus} 
    />
    }
    if (activeSidebar === 'Battery' && activeMiniSidebar === 'Battery Status') {
      return <BatteryStatus 
      errorImage={errorImage} 
      batteryStatus={batteryStatus} 
      lastErrorCode={lastErrorCode} 
      lastErrorTime={lastErrorTime} 
      batteryCapacity={batteryCapacity} 
    />
    }
    if (activeSidebar === 'Battery' && activeMiniSidebar === 'Temperature Data') {
      return       <TemperatureData1 
      currentTemp={currentTemp} 
     
    />;
    }
    if (activeSidebar === 'OBC' && activeMiniSidebar === 'AC Voltage and Current') {
      return   <AcVoltageAndCurrent acCurrent={acCurrent} acVoltage={acVoltage} />;
    }
    if (activeSidebar === 'OBC' && activeMiniSidebar === 'AC Power') {
      return <ACPower acPower={acPower} />;
    }
    if (activeSidebar === 'OBC' && activeMiniSidebar === 'Charging Time') {
      return <ChargingTime chargingTime={chargingTime} />;
    }
    if (activeSidebar === 'OBC' && activeMiniSidebar === 'DC Voltage and Current') {
      return  <DcVoltageAndCurrent dcCurrent={dcCurrent} dcVoltage={dcVoltage} />
    }
    if (activeSidebar === 'OBC' && activeMiniSidebar === 'OBC Status') {
      return   <OBCStatus 
      errorStatus={errorStatus} 
      errorCode={errorCode} 
      errorDate={errorDate} 
      isWorkingFine={isWorkingFine} 
    />;
    }
    if (activeSidebar === 'OBC' && activeMiniSidebar === 'Temperature Data') {
      return    <TemperatureData2 
      temperature2={temperature2} 
      isGood={isGood} 
    />
    }
    if (activeSidebar === 'Vehicular Control' && activeMiniSidebar === 'Low Level Controls') {
      return       <LowLevelControls
      autonomousStatus={autonomousStatus}
      manualModeStatus={manualModeStatus}
      hardwareModeStatus={hardwareModeStatus}
    />
    }
    if (activeSidebar === 'Vehicular Control' && activeMiniSidebar === 'PID Master Values') {
      return       <PIDMasterValues
      steeringPIDOutput={steeringPIDOutput}
      brakePIDOutput={brakePIDOutput}
      motorRPIDOutput1={motorRPIDOutput1}
      motorRPIDOutput2={motorRPIDOutput2}
      masterPIDOutput={masterPIDOutput}
    />
    }
    if (activeSidebar === 'Vehicular Control' && activeMiniSidebar === 'PID Controls') {
      return <PIDControls
      masterControlStatus={masterControlStatus}
      steeringRackStatus={steeringRackStatus}
      brakeStatus={brakeStatus}
      motorsStatus={motorsStatus}
    />
    }
    if (activeSidebar === 'Vehicular Control' && activeMiniSidebar === 'Control Unit 1') {
      return <ControlUnit1 heartbeatStatus={heartbeatStatus} />;
    }
    if (activeSidebar === 'Vehicular Control' && activeMiniSidebar === 'Control Unit 2') {
      return <ControlUnit2 heartbeat1Status={heartbeat1Status} activeStatus={activeStatus} activeSoulStatus={activeSoulStatus} />;
    }
    if (activeSidebar === 'Vehicular Control' && activeMiniSidebar === 'Control Unit 3') {
      return <ControlUnit3 heartbeat2Status={heartbeat2Status} />;
    }
    if (activeSidebar === 'Seating and Lights' && activeMiniSidebar === 'Seating') {
      return <Seating/>;}
    if (activeSidebar === 'Seating and Lights' && activeMiniSidebar === 'External Lighting') {
        return <ExternalLighting/>;
      }
    if (activeSidebar === 'Seating and Lights' && activeMiniSidebar === 'Internal Lighting') {
      return <InternalLighting/>;
    }
    if (activeSidebar === 'Seating and Lights' && activeMiniSidebar === 'Table Status') {
      return <TableStatus/>;
    }
    return null;
  };

  return (
    <div className="body">
      <div className="sidebar">
        <button className={`sidebar-button ${activeSidebar === 'Battery' ? 'active' : ''}`} onClick={() => handleSidebarClick('Battery')}>
          <div className="sidebar-icon"><img src="images/Battery.svg" alt="Battery" /></div>
          <div className="sidebar-text">Battery</div>
        </button>
        <button className={`sidebar-button ${activeSidebar === 'OBC' ? 'active' : ''}`} onClick={() => handleSidebarClick('OBC')}>
          <div className="sidebar-icon"><img src="images/OBC.svg" alt="OBC" /></div>
          <div className="sidebar-text">OBC</div>
        </button>
        <button className={`sidebar-button ${activeSidebar === 'AC' ? 'active' : ''}`} onClick={() => handleSidebarClick('AC')}>
          <div className="sidebar-icon"><img src="images/AC.svg" alt="AC" /></div>
          <div className="sidebar-text">AC</div>
        </button>
        <button className={`sidebar-button ${activeSidebar === 'Seating and Lights' ? 'active' : ''}`} onClick={() => handleSidebarClick('Seating and Lights')}>
          <div className="sidebar-icon"><img src="images/Seating and Lights.svg" alt="Seating and Lights" /></div>
          <div className="sidebar-text">Seating and Lights</div>
        </button>
        <button className={`sidebar-button ${activeSidebar === 'Car Status' ? 'active' : ''}`} onClick={() => handleSidebarClick('Car Status')}>
          <div className="sidebar-icon"><img src="images/tesla.svg" alt="Car Status" /></div>
          <div className="sidebar-text">Car Status</div>
        </button>
        <button className={`sidebar-button ${activeSidebar === 'Doors and Tyres' ? 'active' : ''}`} onClick={() => handleSidebarClick('Doors and Tyres')}>
          <div className="sidebar-icon"><img src="images/Doors and Tyres.svg" alt="Doors and Tyres" /></div>
          <div className="sidebar-text">Doors and Tyres</div>
        </button>
        <button className={`sidebar-button ${activeSidebar === 'Vehicular Control' ? 'active' : ''}`} onClick={() => handleSidebarClick('Vehicular Control')}>
          <div className="sidebar-icon"><img src="images/Vehicular Control.svg" alt="Vehicular Control" /></div>
          <div className="sidebar-text">Vehicular Control</div>
        </button>
      </div>
      {renderMiniSidebar()}
      <div className="content-area">
        {renderContent()}
      </div>
    </div>
  );
};

export default MainContent;
