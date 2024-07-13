import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer'; // Adjust the path as needed
import Music from '../pages/music'; // Adjust the path as needed
import Maps from '../pages/maps'; // Adjust the path as needed
import Dashboard from '../pages/dashboard'; 
import Mode from '../pages/mode'; 
// import other pages as needed

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/page1" element={<Music />} />
          <Route path="/page2" element={<Maps />} />
          <Route path="/page3" element={<Dashboard />} />
          <Route path="/page4" element={<Mode />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
