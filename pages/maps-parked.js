import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import Speedometer from "../components/speed";
import AppCarousel from "../components/AppCarousel"; // Import AppCarousel component

export default function Home() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(true); // Manage carousel visibility

  return (
    <div className="container">
      <Head>
        <title>Car Dashboard</title>
      </Head>

      <Header />

      {/* Flex container to align Speedometer and AppCarousel side by side */}
      <main className="main-content5">
        {/* Speedometer on the left */}
        

        {/* Render AppCarousel on the right */}
        <div className="right-side">
          {isCarouselOpen && (
            <div className="carousel-section">
              <AppCarousel onClose={() => setIsCarouselOpen(false)} />
            </div>
          )}
        </div>
      </main>
      <Speedometer />
      <Footer />
      
    </div>
  );
}
