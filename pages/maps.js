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

    // Handle resizing
    const mapContainer = document.querySelector(".map-container");
    const resizeHandle = document.querySelector(".resize-handle");

    let isResizing = false;

    const handleMouseDown = (event) => {
      isResizing = true;
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (event) => {
      if (!isResizing) return;
      const newWidth =
        event.clientX - mapContainer.getBoundingClientRect().left;
      mapContainer.style.width = `${newWidth}px`;
    };

    const handleMouseUp = () => {
      isResizing = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    resizeHandle.addEventListener("mousedown", handleMouseDown);

    return () => {
      resizeHandle.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
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
            <div className="resize-handle"></div>
          </div>
        </div>
      </main>
      <Speedometer />
      <Footer />
    </div>
  );
}
