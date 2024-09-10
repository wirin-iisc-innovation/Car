// pages/index.js

import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSwitched, setIsSwitched] = useState(false);

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

  const handleSwitch = () => {
    setIsSwitched(!isSwitched);
  };

  return (
    <div className="container">
      <Head>
        <title>Car Dashboard</title>
      </Head>

      <Header />

      <main className="main-content5">
        <div className={`left-side ${isSwitched ? "switched" : ""}`}>
          <img
            src="/images_map/Frame 4564.svg"
            alt="Frame"
            className="frame-image"
          />
        </div>
        <div className={`right-side ${isSwitched ? "switched" : ""}`}>
          <div className="map-container">
            <iframe
              src="https://ayushratan.pythonanywhere.com/"
              className="map-iframe"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="resize-handle"></div>
          </div>
        </div>
        <div className="switch-arrow" onClick={handleSwitch}>
          ↔
        </div>
      </main>

      <Footer />
    </div>
  );
}
