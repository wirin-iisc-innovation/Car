// pages/index.js

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Update the time and date
    const updateTimeAndDate = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const day = now.getDate();
      const month = now.toLocaleString('default', { month: 'long' });

      document.querySelector('#time').innerHTML = `${hours}:${minutes} PM`;
      document.querySelector('#date').innerHTML = `Sunday, ${day} ${month}`;
    };

    // Update the weather information
    const updateWeather = () => {
      const temperature = 23; // Example temperature
      const high = 27; // Example high temperature
      document.querySelector('#temperature').innerHTML = `${temperature}°C / ${high}°C`;
    };

    // Initialize the dashboard
    const initDashboard = () => {
      updateTimeAndDate();
      updateWeather();
    };

    initDashboard();
    setInterval(updateTimeAndDate, 60000); // Update time every minute
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Car Dashboard</title>
      </Head>

      <Header />

      <main className="main-content">
        <img src="/images_map/Frame 4564.svg" alt="Frame" className="frame-image" />
        <div className="map-container">
          <iframe
            src="http://127.0.0.1:5000/"
            className="map-iframe"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </main>

      <Footer />
    </div>
  );
}
