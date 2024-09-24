// pages/index.tsx
import React from "react";
import Head from "next/head";
import Header from "../components/Header";

import Footer from "../components/Footer";
import Speedometer from "../components/speed";

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles/globals.css" />
      </Head>

      <Header />

      <div className="cont">
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
        
          width="300"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
        ></iframe>
      </div>
      <Speedometer />
      <Footer />
    </div>
  );
};

export default Home;
