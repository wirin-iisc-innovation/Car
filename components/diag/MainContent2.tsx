import React, { useEffect, useState } from "react";
import io from 'socket.io-client'
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
import Tyres from "./Tyres";
import SideDoors from "./sidedoors";
import RoofAndBootDoors from "./roofandbootdoors";

import CarModePopup from "./CarModePopup";
import ByWirePopup from "./ByWirePopup";
import CarStatusUI from "./CarDataLevel2";
import TV from "./TV";
import CarDataLevel1 from "./CarDataLevel1";


const MainContent: React.FC = () => {
  const [activeSidebar2, setActiveSidebar2] = useState("Battery");
  const [activeMiniSidebar2, setActiveMiniSidebar2] = useState<string | null>(
    null
  );
  const [showGrid,setshowGrid] = useState(false);
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
  const [chargePercentage, setChargePercentage] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const goodCells = 39;
  const poorCells = 1;
  const totalCells = 40;
  const avgVoltage = 3.3; // Example average cell voltage
  const [minVoltage, setminVoltage ]= useState(0.77); // Example minimum cell voltage
  const [maxVoltage, setmaxVoltage]= useState(4.7); // Example maximum cell voltage
  const minCellCount = 10; // Example minimum cell count
  const maxCellCount = 12;
  const [mosfetCharging, setMosfetChargingState] = useState("OFF"); // Example dynamic value
  const [mosfetDischarging, setMosfetDischargingState] = useState("ON"); // Example dynamic value
  const chargerStatus = "Not connected to charger";
  const errorImage = "images/Good cell.svg"; // Image source dynamically
  const batteryStatus = "Currently Working Fine."; // Example dynamic value
  const [lastErrorCode, setErrorCode] = useState("232"); // Example dynamic value
  const lastErrorTime = "23/7 15:30"; // Example dynamic value
  const [batteryCapacity,setbatteryCapacity] = useState("35");
  const [arrayVoltage,setarrayVoltage] = useState([3.8, 3.7, 3.9, 3.6, 3.8, 3.7, 3.9, 3.6, 3.8, 3.7, 3.9, 3.6, 3.8, 3.7, 3.9, 3.6, 3.8, 3.7, 3.9, 3.6, 3.8, 3.7, 3.9]);
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
  const temperature2 = 32; // Example dynamic temperature value
  const isGood = true;


  const updateFunction = () => {
    fetch('http://0.0.0.0:5002/bms').then( async response => {
      const data = await response.json()

      const battery = data["Battery"];
      let voltageArray = [];
      
      for(let i = 1; i <= 24; ++i) {
        voltageArray.push(battery[`Voltage_${i}`])
      }

      setarrayVoltage(voltageArray)
      setTemperature(battery["Temperature"])
      setMosfetChargingState(battery["ChargingMOSFET"])
      setMosfetDischargingState(battery["DischargingMOSFET"])
      setmaxVoltage(battery["CellMaximumVoltage"])
      setminVoltage(battery["CellMinimumVoltage"])
      setbatteryCapacity(battery["Capacity"])
      setErrorCode(battery["ErrorStatus"])
    })
  }

  useEffect(() => {
    const id = setInterval(updateFunction, 1000)
    return () => clearInterval(id)
  })

  const handleSidebar2Click = (category: string) => {
    setActiveSidebar2(category);
    setActiveMiniSidebar2(null);
  };

  const handleMiniSidebar2Click = (buttonLabel: string) => {
    setActiveMiniSidebar2(buttonLabel);
  };

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
    "Car Status": [
      "Car Mode",
      "ByWire System",
      "TV",
      "Car Data Level 1",
      "Car Data Level 2",
      "Car Data Level 3",
      "Car Data Level 4",
      "Error Statuses",
    ],
    "Doors and Tyres": ["Tyres", "Side Doors", "Roof and Boot Doors"],
    "Seating and Lights":["Seating","Internal Lighting","External Lighting","Table Status"],
    "Vehicular Control": [
      "Low Level Controls",
      "PID Master Values",
      "PID Controls",
      "Control Unit 1",
      "Control Unit 2",
      "Control Unit 3",
    ],
  };

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

  const renderContent = () => {
    if (
      activeSidebar2 === "Battery" &&
      activeMiniSidebar2 === "Voltage and Current"
    ) {
      return (
        <VoltageCurrentContent
          currentDrawn={currentDrawn}
          batteryVoltage={batteryVoltage}
          arrayVoltage={arrayVoltage}
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

      let avgVoltage: number = 0;
      for(let i = 0; i < arrayVoltage.length; ++i)
        avgVoltage += arrayVoltage[i] / arrayVoltage.length

      avgVoltage = parseFloat(avgVoltage.toPrecision(2))
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
      return <TemperatureData1 currentTemp={`${temperature}`} />;
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
      return (
        <DcVoltageAndCurrent dcCurrent={dcCurrent} dcVoltage={dcVoltage} />
      );
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
    if(activeSidebar2 ==="Doors and Tyres" && activeMiniSidebar2 ==="Tyres"){
      return <Tyres />;
    }
    if(activeSidebar2 ==="Doors and Tyres" && activeMiniSidebar2 ==="Side Doors"){
      return <SideDoors/>;
    }
    if(activeSidebar2 ==="Doors and Tyres" && activeMiniSidebar2 ==="Roof and Boot Doors"){
      return <RoofAndBootDoors/>;
    }
    if(activeSidebar2 === "Car Status" && activeMiniSidebar2 === "Car Mode"){

      return <CarModePopup onClose={function (): void {
        throw new Error("Function not implemented.");
      } } />;
    }
    if(activeSidebar2 === "Car Status" && activeMiniSidebar2 === "ByWire System"){
      return <ByWirePopup onClose={function (): void {
        throw new Error("Function not implemented.");
      } } />;
    }
    if(activeSidebar2 === "Car Status" && activeMiniSidebar2 === "TV"){
      return <TV onClose={function (): void {
        throw new Error("Function not implemented.");
      } } />;
    }
    if(activeSidebar2 === "Car Status" && activeMiniSidebar2 === "Car Data Level 1"){
      return <CarDataLevel1 onClose={function (): void {
        throw new Error("Function not implemented.");
      } } />;
    }
    if(activeSidebar2 === "Car Status" && activeMiniSidebar2 === "Car Data Level 2"){
      return <CarStatusUI />;

      return <CarModePopup onClose={function (): void {
        throw new Error("Function not implemented.");
      } } />;
    }
    if(activeSidebar2 === "Car Status" && activeMiniSidebar2 === "ByWire System"){
      return <ByWirePopup onClose={function (): void {
        throw new Error("Function not implemented.");
      } } />;
    }
    if(activeSidebar2 === "Car Status" && activeMiniSidebar2 === "TV"){
      return <TV onClose={function (): void {
        throw new Error("Function not implemented.");
      } } />;
    }
    if(activeSidebar2 === "Car Status" && activeMiniSidebar2 === "Car Data Level 1"){
      return <CarDataLevel1 onClose={function (): void {
        throw new Error("Function not implemented.");
      } } />;
    }
    if(activeSidebar2 === "Car Status" && activeMiniSidebar2 === "Car Data Level 2"){
      return <CarStatusUI />;

    }
    
    return null;
  };

  // const socket = io('http://127.0.0.1:5000');
  // socket.connect();

  // socket.on('battery_cell_voltage', (charge) => {
  //   setChargePercentage(charge["Charge"]);
  // })
  // socket.on('battery_charging_mosfet', (mosftJson) => {
  //   setMosfetChargingState(mosftJson["ChargingMOSFET"]);
  // })
  // socket.on('battery_discharging_mosfet', (Json) => {
  //   setMosfetDischargingState(Json["DischargingMOSFET"]);
  // })
  // socket.on('battery_temperature', (Json) => {
  //   setTemperature(Json["Temperature"]);
  // })
  // socket.on('battery_capacity', (Json1) => {
  //   setbatteryCapacity(Json1["Capacity"]);
  // })
  // socket.on('battery_minimum_voltage', (Json2) => {
  //   setminVoltage(Json2["CellMinimumVoltage"]);
  // })
  // socket.on('battery_maximum_voltage', (Json3) => {
  //   setmaxVoltage(Json3["CellMaximumVoltage"]);
  // })

  // socket.on('battery_voltage',(Json4) => {
  //   setarrayVoltage(Json4["Voltage"]);
  // })
  
  

  // useEffect(() => {
  //   const updateFunc = async () => {
  //     socket.emit('get_cell_voltage');
  //     socket.emit('get_charging_mosfet');
  //     socket.emit('get_discharging_mosfet');
  //     socket.emit('get_temperature');
  //     socket.emit('get_capacity');
  //     socket.emit('get_min_voltage');
  //     socket.emit('get_max_voltage');
  //     socket.emit('get_voltage');
  //   }

  //   const id = setInterval(updateFunc, 2000);
  //   return () => clearInterval(id);
  // })

  return (
    <div className="body">
      <div className="sidebar2">
        <button
          className={`sidebar2-button ${
            activeSidebar2 === "Battery" ? "active" : ""
          }`}
          onClick={() => handleSidebar2Click("Battery")}
        >
          <div className="sidebar2-icon">
            <img src="images/Battery.svg" alt="Battery" />
          </div>
          <div className="sidebar2-text">Battery</div>
        </button>
        <button
          className={`sidebar2-button ${
            activeSidebar2 === "OBC" ? "active" : ""
          }`}
          onClick={() => handleSidebar2Click("OBC")}
        >
          <div className="sidebar2-icon">
            <img src="images/OBC.svg" alt="OBC" />
          </div>
          <div className="sidebar2-text">OBC</div>
        </button>
        {/*<button
          className={`sidebar2-button ${
            activeSidebar2 === "AC" ? "active" : ""
          }`}
          onClick={() => handleSidebar2Click("AC")}
        >
          <div className="sidebar2-icon">
            <img src="images/AC.svg" alt="AC" />
          </div>
          <div className="sidebar2-text">AC</div>
        </button>*/}
        <button
          className={`sidebar2-button ${
            activeSidebar2 === "Seating and Lights" ? "active" : ""
          }`}
          onClick={() => handleSidebar2Click("Seating and Lights")}
        >
          <div className="sidebar2-icon">
            <img src="images/Seating and Lights.svg" alt="Seating and Lights" />
          </div>
          <div className="sidebar2-text">Seating and Lights</div>
        </button>
        <button
          className={`sidebar2-button ${
            activeSidebar2 === "Car Status" ? "active" : ""
          }`}
          onClick={() => handleSidebar2Click("Car Status")}
        >
          <div className="sidebar2-icon">
            <img src="images/tesla.svg" alt="Car Status" />
          </div>
          <div className="sidebar2-text">Car Status</div>
        </button>
        <button
          className={`sidebar2-button ${
            activeSidebar2 === "Doors and Tyres" ? "active" : ""
          }`}
          onClick={() => handleSidebar2Click("Doors and Tyres")}
        >
          <div className="sidebar2-icon">
            <img src="images/Doors and Tyres.svg" alt="Doors and Tyres" />
          </div>
          <div className="sidebar2-text">Doors and Tyres</div>
        </button>
        <button
          className={`sidebar2-button ${
            activeSidebar2 === "Vehicular Control" ? "active" : ""
          }`}
          onClick={() => handleSidebar2Click("Vehicular Control")}
        >
          <div className="sidebar2-icon">
            <img src="images/Vehicular Control.svg" alt="Vehicular Control" />
          </div>
          <div className="sidebar2-text">Vehicular Control</div>
        </button>
      </div>
      {renderMiniSidebar2()}
      <div className="content-area">{renderContent()}</div>
    </div>
  );
};

export default MainContent;