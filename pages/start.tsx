import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Head from 'next/head';
import Footer from '../components/Footer';

const Start: React.FC = () => {
  const router = useRouter();

  const handleStartClick = () => {
    router.push('/maps'); // Redirect to the "maps" page
  };

  return (
    <div className="container">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/styles/globals.css" />
        <title>Car Dashboard with Music Toolbar</title>
      </Head>
      <Header />
      
      <main className="main-content" role="main">
        <div className="start-screen">
          <div className="chevrons left-chevrons">
            {[...Array(11)].map((_, i) => (
              <div key={`left-chevron-${i}`} className="chevron"></div>
            ))}
          </div>
          <div className="start-button" onClick={handleStartClick}>
            <div className="start-circle">
              <span className="start-text">START</span>
              <span className="mode-text">AUTO MODE</span>
            </div>
          </div>
          <div className="chevrons right-chevrons">
            {[...Array(10)].map((_, i) => (
              <div key={`right-chevron-${i}`} className="chevron"></div>
            ))}
          </div>
        </div>
      </main>
      
      <div className="battery-info-bar">
        <div className="battery-info">
          <div className="remaining">
            <span id="distance" className="remaining-km">204</span>
            <span className="unit">km</span>
            <div className="remaining-text">Remaining</div>
          </div>
          <div className="battery">
            <span id="battery" className="battery-percentage">85</span>
            <span className="unit">%</span>
            <div className="battery-text">Battery</div>
          </div>
          <div className="average">
            <span id="average" className="avg-wh">128</span>
            <span className="unit">Wh/km</span>
            <div className="average-text">Average</div>
          </div>
        </div>
        <div className="battery-bar-container">
          <div className="battery-bar-base">
            <div id="battery-bar-fill" className="battery-bar-fill"></div>
          </div>
        </div>
        
      </div>
      <Footer />
      
    </div>
    
  );
};

export default Start;
