import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "../components/Footer"; // Make sure the path is correct
import Music from "../pages/music"; // Ensure the path to Music page is correct
import Maps from "../pages/maps"; // Ensure the path to Maps page is correct
import Dashboard from "../pages/dashboard"; // Ensure the path to Dashboard page is correct
import Mode from "../pages/mode"; // Ensure the path to Mode page is correct
import Diag from "../pages/diag"; // Ensure the path to Diag page is correct
import FullScreen from "../components/Fullscreen";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/page1" element={<Music />} />
          <Route path="/page2" element={<Maps />} />
          <Route path="/page3" element={<Dashboard />} />
          <Route path="/page4" element={<Mode />} />
          <Route path="/" element={<Navigate to="/diag" replace />} />
{" "}
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
