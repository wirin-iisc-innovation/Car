import React, { useState, useEffect } from "react";
import VoltageCurrentContent from "./VoltageCurrentContent";
import ChargeLevel from "./ChargeLevel";
import BatteryHealth from "./BatteryHealth";
import CellVoltage from "./CellVoltages";
import BatteryStatus from "./BatteryStatus";
import ChargingStatus from "./ChargingStatus";
import TemperatureData1 from "./TemperatureDataBattery";
import AcVoltageAndCurrent from "./AcVoltageAndCurrent";
import ACPower from "./AcPower";
import ChargingTime from "./ChargingTime";
import DcVoltageAndCurrent from "./DCVoltageAndCurrent";
import OBCStatus from "./OBCStatus";
import TemperatureData2 from "./TemperatureDataOBC";
import LowLevelControls from "./LowLevelControls";
import PIDMasterValues from "./PIDMasterValues";
import PIDControls from "./PIDControls";
import ControlUnit1 from "./ControlUnit1";
import ControlUnit2 from "./ControlUnit2";
import ControlUnit3 from "./ControlUnit3";
import Seating from "./Seating";
import InternalLighting from "./InternalLighting";
import ExternalLighting from "./ExternalLighting";
import TableStatus from "./TableStatus";

const MainContent: React.FC = () => {
  const [activeSidebar2, setActiveSidebar2] = useState("Battery");
  const [activeMiniSidebar2, setActiveMiniSidebar2] = useState<string | null>(
    "Voltage and Current"
  );

  const [heartbeatStatus, setHeartbeatStatus] = useState("BEATING");
  const heartbeat1Status = "BEATING";
  const activeStatus = "ACTIVE";
  const activeSoulStatus = "MAIN";
  const heartbeat2Status = "BEATING";
  const masterControlStatus = "ON";
  const steeringRackStatus = "OFF";
  const brakeStatus = "OFF";
  const motorsStatus = "OFF";
  const autonomousStatus = "ON";
  const manualModeStatus = "OFF";
  const hardwareModeStatus = "OFF";
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
  const avgVoltage = 3.3; // Example average cell voltage
  const minVoltage = 0.5; // Example minimum cell voltage
  const maxVoltage = 4.5; // Example maximum cell voltage
  const minCellCount = 10; // Example minimum cell count
  const maxCellCount = 12;
  const mosfetCharging = "YES"; // Example dynamic value
  const mosfetDischarging = "NO"; // Example dynamic value
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
  const dcCurrent = "79"; // Example dynamic DC current value
  const dcVoltage = "46";
  const errorStatus = "Currently Working Fine."; // Example dynamic status
  const errorCode = "232"; // Example dynamic error code
  const errorDate = "23/7 15:30"; // Example dynamic error date
  const isWorkingFine = true;
  const temperature2 = 37; // Example dynamic temperature value
  const isGood = true;

  // Function to update the active sidebar and select the first mini-sidebar option by default
  const handleSidebar2Click = (category: string) => {
    setActiveSidebar2(category);
    setActiveMiniSidebar2(miniSidebar2Buttons[category][0]);
  };

  const handleMiniSidebar2Click = (buttonLabel: string) => {
    setActiveMiniSidebar2(buttonLabel);
  };

  // List of sidebar and mini-sidebar items
  const miniSidebar2Buttons: { [key: string]: string[] } = {
    Battery: [
      "Voltage and Current",
      "Charge Level",
      "Battery Health",
      "Cell Voltages",
      "Charging Status",
      "Battery Status",
      "Temperature Data",
    ],
    OBC: [
      "AC Voltage and Current",
      "AC Power",
      "Charging Time",
      "DC Voltage and Current",
      "OBC Status",
      "Temperature Data",
    ],
    AC: ["Temperature", "Fan Speed", "AC Status"],
    "Seating and Lights": [
      "Seating",
      "External Lighting",
      "Internal Lighting",
      "Table Status",
    ],
    "Car Status": [
      "Car Mode",
      "Bywire System",
      "TV",
      "Car Data Level1",
      "Car Data Level2",
      "Car Data Level3",
      "Car Data Level4",
      "Error Statuses",
    ],
    "Doors and Tyres": ["Tyres", "Side Doors", "Roof and Boot Doors"],
    "Vehicular Control": [
      "Low Level Controls",
      "PID Master Values",
      "PID Controls",
      "Control Unit 1",
      "Control Unit 2",
      "Control Unit 3",
    ],
  };

  // Automatically set to Battery page and first mini-sidebar option when navigating to "diag" page
  useEffect(() => {
      setActiveSidebar2("Battery");
      setActiveMiniSidebar2(miniSidebar2Buttons["Battery"][0]);
  }, []);

  // Function to render the mini-sidebar options
  const renderMiniSidebar2 = () => {
    return (
      <div className="mini-sidebar2">
        {miniSidebar2Buttons[activeSidebar2].map((buttonLabel) => (
          <button
            key={buttonLabel}
            className={`mini-sidebar2-button ${
              activeMiniSidebar2 === buttonLabel ? "active" : ""
            }`}
            onClick={() => handleMiniSidebar2Click(buttonLabel)}
          >
            <div className="mini-sidebar2-text">{buttonLabel}</div>
          </button>
        ))}
      </div>
    );
  };

  // Function to render the content area based on the selected sidebar and mini-sidebar
  const renderContent = () => {
    if (
      activeSidebar2 === "Battery" &&
      activeMiniSidebar2 === "Voltage and Current"
    ) {
      return (
        <VoltageCurrentContent
          currentDrawn={currentDrawn}
          batteryVoltage={batteryVoltage}
        />
      );
    }
    if (activeSidebar2 === "Battery" && activeMiniSidebar2 === "Charge Level") {
      return <ChargeLevel chargePercentage={chargePercentage} />;
    }
    if (
      activeSidebar2 === "Battery" &&
      activeMiniSidebar2 === "Battery Health"
    ) {
      return (
        <BatteryHealth
          temperature={temperature}
          goodCells={goodCells}
          poorCells={poorCells}
          totalCells={totalCells}
        />
      );
    }
    if (
      activeSidebar2 === "Battery" &&
      activeMiniSidebar2 === "Cell Voltages"
    ) {
      return (
        <CellVoltage
          avgVoltage={avgVoltage}
          minVoltage={minVoltage}
          maxVoltage={maxVoltage}
          minCellCount={minCellCount}
          maxCellCount={maxCellCount}
        />
      );
    }
    if (
      activeSidebar2 === "Battery" &&
      activeMiniSidebar2 === "Charging Status"
    ) {
      return (
        <ChargingStatus
          mosfetCharging={mosfetCharging}
          mosfetDischarging={mosfetDischarging}
          chargerStatus={chargerStatus}
        />
      );
    }
    if (
      activeSidebar2 === "Battery" &&
      activeMiniSidebar2 === "Battery Status"
    ) {
      return (
        <BatteryStatus
          errorImage={errorImage}
          batteryStatus={batteryStatus}
          lastErrorCode={lastErrorCode}
          lastErrorTime={lastErrorTime}
          batteryCapacity={batteryCapacity}
        />
      );
    }
    if (
      activeSidebar2 === "Battery" &&
      activeMiniSidebar2 === "Temperature Data"
    ) {
      return <TemperatureData1 currentTemp={currentTemp} />;
    }
    if (
      activeSidebar2 === "OBC" &&
      activeMiniSidebar2 === "AC Voltage and Current"
    ) {
      return (
        <AcVoltageAndCurrent acCurrent={acCurrent} acVoltage={acVoltage} />
      );
    }
    if (activeSidebar2 === "OBC" && activeMiniSidebar2 === "AC Power") {
      return <ACPower acPower={acPower} />;
    }
    if (activeSidebar2 === "OBC" && activeMiniSidebar2 === "Charging Time") {
      return <ChargingTime chargingTime={chargingTime} />;
    }
    if (
      activeSidebar2 === "OBC" &&
      activeMiniSidebar2 === "DC Voltage and Current"
    ) {
      return <DcVoltageAndCurrent dcCurrent={dcCurrent} dcVoltage={dcVoltage} />;
    }
    if (activeSidebar2 === "OBC" && activeMiniSidebar2 === "OBC Status") {
      return (
        <OBCStatus
          errorStatus={errorStatus}
          errorCode={errorCode}
          errorDate={errorDate}
          isWorkingFine={isWorkingFine}
        />
      );
    }
    if (activeSidebar2 === "OBC" && activeMiniSidebar2 === "Temperature Data") {
      return <TemperatureData2 temperature2={temperature2} isGood={isGood} />;
    }
    if (
      activeSidebar2 === "Vehicular Control" &&
      activeMiniSidebar2 === "Low Level Controls"
    ) {
      return (
        <LowLevelControls
          autonomousStatus={autonomousStatus}
          manualModeStatus={manualModeStatus}
          hardwareModeStatus={hardwareModeStatus}
        />
      );
    }
    if (
      activeSidebar2 === "Vehicular Control" &&
      activeMiniSidebar2 === "PID Master Values"
    ) {
      return (
        <PIDMasterValues
          steeringPIDOutput={steeringPIDOutput}
          brakePIDOutput={brakePIDOutput}
          motorRPIDOutput1={motorRPIDOutput1}
          motorRPIDOutput2={motorRPIDOutput2}
          masterPIDOutput={masterPIDOutput}
        />
      );
    }
    if (
      activeSidebar2 === "Vehicular Control" &&
      activeMiniSidebar2 === "PID Controls"
    ) {
      return (
        <PIDControls
          masterControlStatus={masterControlStatus}
          steeringRackStatus={steeringRackStatus}
          brakeStatus={brakeStatus}
          motorsStatus={motorsStatus}
        />
      );
    }
    if (
      activeSidebar2 === "Vehicular Control" &&
      activeMiniSidebar2 === "Control Unit 1"
    ) {
      return <ControlUnit1 heartbeatStatus={heartbeatStatus} />;
    }
    if (
      activeSidebar2 === "Vehicular Control" &&
      activeMiniSidebar2 === "Control Unit 2"
    ) {
      return (
        <ControlUnit2
          heartbeat1Status={heartbeat1Status}
          activeStatus={activeStatus}
          activeSoulStatus={activeSoulStatus}
        />
      );
    }
    if (
      activeSidebar2 === "Vehicular Control" &&
      activeMiniSidebar2 === "Control Unit 3"
    ) {
      return <ControlUnit3 heartbeat2Status={heartbeat2Status} />;
    }
    if (
      activeSidebar2 === "Seating and Lights" &&
      activeMiniSidebar2 === "Seating"
    ) {
      return <Seating />;
    }
    if (
      activeSidebar2 === "Seating and Lights" &&
      activeMiniSidebar2 === "External Lighting"
    ) {
      return <ExternalLighting />;
    }
    if (
      activeSidebar2 === "Seating and Lights" &&
      activeMiniSidebar2 === "Internal Lighting"
    ) {
      return <InternalLighting />;
    }
    if (
      activeSidebar2 === "Seating and Lights" &&
      activeMiniSidebar2 === "Table Status"
    ) {
      return <TableStatus />;
    }
    // Add additional content rendering logic for other mini-sidebar selections
    return null;
  };

  return (
    <div className="body">
      <div className="sidebar2">
        {Object.keys(miniSidebar2Buttons).map((category) => (
          <button
            key={category}
            className={`sidebar2-button ${
              activeSidebar2 === category ? "active" : ""
            }`}
            onClick={() => handleSidebar2Click(category)}
          >
            <div className="sidebar2-icon">
              <img src={`images/${category}.svg`} alt={category} />
            </div>
            <div className="sidebar2-text">{category}</div>
          </button>
        ))}
      </div>
      {renderMiniSidebar2()}
      <div className="content-area">{renderContent()}</div>
    </div>
  );
};

export default MainContent;
