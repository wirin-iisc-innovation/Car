// pages/index.js

import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Speedometer from "../components/speed";

export default function Home() {
  useEffect(() => {
    // Update the time and date
    // Update the weather information
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Car Dashboard</title>
      </Head>

      <Header />

      <main className="main-content5">
        <div className="right-side">
          <div className="map-container">
            <iframe
              src="http://127.0.0.1:5000"
              className="map-iframe"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </main>
      <Speedometer />
      <Footer />
    </div>
  );
}
