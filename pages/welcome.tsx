// src/app/black-screen/page.tsx

'use client';  // Add this directive to mark as a Client Component

import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const BlackScreen: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStep(1), 1000), // Namaste!
      setTimeout(() => setStep(2), 4000), // Hello!
      setTimeout(() => setStep(3), 7000), // Namaskara!
      setTimeout(() => setStep(4), 10000), // Welcome to
      setTimeout(() => setStep(5), 13000)  // WIPOD
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <>
      <Head>
        <title>Black Screen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="container">
        {step === 1 && <h1 className="namaste">नमस्ते!</h1>}
        {step === 2 && <h1 className="hello">Hello!</h1>}
        {step === 3 && <h1 className="namaskara">ನಮಸ್ಕಾರ!</h1>}
        {step === 4 && <h1 className="welcome-to">Welcome to</h1>}
        {step === 5 && <h1 className="wipod">WIPOD</h1>}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: black;
          overflow: hidden;
          position: relative;
          flex-direction: column;
        }
        .namaste, .hello, .namaskara, .welcome-to, .wipod {
          color: white;
          font-size: 80px;
          position: absolute;
          opacity: 0;
        }
        .namaste {
          font-family: 'Mukta', sans-serif;
          animation: appear 3s forwards, disappear 2s 2s forwards, brighten 1s 2s forwards; /* Appear, brighten, and then disappear */
        }
        .hello {
          font-family: 'Urbanist', sans-serif;
          animation: appear 3s forwards, disappear 1s 2s forwards; /* Appear and then disappear */
        }
        .namaskara {
          font-family: 'Urbanist', sans-serif;
          animation: appear 3s forwards, disappear 1s 2s forwards; /* Appear and then disappear */
        }
        .welcome-to {
          font-family: 'Urbanist', sans-serif;
          animation: appear 3s forwards, disappear 1s 2s forwards; /* Appear and then disappear */
        }
        .wipod {
          font-family: 'Urbanist', sans-serif;
          animation: appear 4s forwards, brighten 1s 1s forwards; /* Appear and then brighten */
        }

        @keyframes appear {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes disappear {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        @keyframes brighten {
          from {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }
          to {
            text-shadow: 0 0 20px rgba(255, 255, 255, 1);
          }
        }
      `}</style>
    </>
  );
};

export default BlackScreen;
