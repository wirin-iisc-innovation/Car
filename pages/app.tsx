import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer"; // Make sure the path is correct
import Music from "../pages/music"; // Ensure the path to Music page is correct
import Maps from "../pages/maps"; // Ensure the path to Maps page is correct
import Dashboard from "../pages/dashboard"; // Ensure the path to Dashboard page is correct
import Mode from "../pages/mode"; // Ensure the path to Mode page is correct
import Diag from "../pages/diag"; // Ensure the path to Diag page is correct
const express = require("express");
const cors = require("cors");
const app = express();

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/page1" element={<Music />} />
          <Route path="/page2" element={<Maps />} />
          <Route path="/page3" element={<Dashboard />} />
          <Route path="/page4" element={<Mode />} />
          <Route path="/diag" element={<Diag />} />{" "}
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
app.use(cors()); // This will allow all origins. For more control, pass an options object.

app.get("/speed", (req, res) => {
  res.json({ speed: 45.0 });
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
export default App;
