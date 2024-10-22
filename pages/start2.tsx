import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Head from 'next/head';
import Footer from '../components/Footer';

const Start: React.FC = () => {
  const router = useRouter();

  const handleStartClick = () => {
    router.push('/maps-parked'); // Redirect to the "maps" page
  };

  return (
    <div className="container3">
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
            {[...Array(13)].map((_, i) => (
              <div key={`left-chevron-${i}`} className="chevron"></div>
            ))}
          </div>
          <div className="start-button" onClick={handleStartClick}>
            <div className="start-circle">
              <span className="start-text">START</span>
              <span className="mode-text">PARKED MODE</span>
            </div>
          </div>
          <div className="chevrons right-chevrons">
            {[...Array(13)].map((_, i) => (
              <div key={`right-chevron-${i}`} className="chevron"></div>
            ))}
          </div>
        </div>
      </main>
      
      
      <Footer />
      
    </div>
    
  );
};

export default Start;
