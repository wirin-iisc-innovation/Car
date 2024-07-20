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
      
      <div className="main-content">
        <div className="unique-left-side">
          <div className="unique-welcome-text">
            <h1>Hello, Daivik</h1>
            <p>How can I help you today?</p>
          </div>
          <img src="/images/voice.svg" alt="AI Assistant" className="ai-image" />
        </div>
        <div className="unique-right-side">
          <h2>Quick requests</h2>
          <div className="unique-quick-requests">
            <div className="unique-request">Hey Wipod, Schedule a meeting for tomorrow at 3 PM.</div>
            <div className="unique-request">Recent: Navigate to home</div>
            <div className="unique-request">Hey Wipod, write an email to my boss.</div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Start;
