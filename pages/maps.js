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
      // const dateStyle = {
      //   fontSize: '30px',
      //   margintop: '2px' /* Reduced line width */,
      //   marginBottom:'20px'
      // };

      // const timeStyle = {
      //   fontSize: '45px',
      //   marginBottom: '2px', /* Reduced line width */
      //   margintop: '20px'
      // };

      // const time_date_css={
      //   display: 'flex',
      //   flexdirection: 'column',
      //   paddingleft: '20px',
      //   marginright: '10px',        
      //   margintop: '40px'
      // }


      document.querySelector('#time').innerHTML = `${hours}:${minutes} PM`;
      // document.querySelector('#time').style=timestyle;
      document.querySelector('#date').innerHTML = `Sunday, ${day} ${month}`;

      // Object.assign(document.querySelector('#time').style, timeStyle);
      // Object.assign(document.querySelector('#date').style, dateStyle);
      // Object.assign(document.querySelector('.time-date').style, time_date_css);
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
        <img src="/images_map/map.svg" alt="Map" className="map-image" />
      </main>

      <Footer />
    </div>
  );
}
