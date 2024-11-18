import React, { useRef } from "react";
import { useRouter } from "next/router";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../components/Footer"; // Untouched Footer import

const profiles = [
  {
    id: 1,
    name: "Mr Bean",
    image: "/images/mrbean.jpeg", // Replace with actual profile image
    time: "10:30 AM",
  },
  {
    id: 2,
    name: "Muzan",
    image: "/images/muzan.jpg",
    time: "11:15 AM",
  },
  {
    id: 3,
    name: "Tanjiro",
    image: "/images/tanjiro.webp",
    time: "2:45 PM",
  },
  {
    id: 4,
    name: "Obito",
    image: "/images/tobi.jpg",
    time: "2:30 PM",
  },
  {
    id: 5,
    name: "Luke",
    image: "/images/luke.jpg",
    time: "4:45 PM",
  },
];

const ProfileCarousel = () => {
  const router = useRouter();
  const carouselRef = useRef<AliceCarousel>(null); // Ref for manual navigation

  const handleProfileClick = (profileId: number) => {
    router.push(`/main?profileId=${profileId}`);
  };

  // Items for the carousel
  const items = profiles.map((profile) => (
    <div
      key={profile.id}
      className="profile-card"
      onClick={() => handleProfileClick(profile.id)}
    >
      <img src={profile.image} alt={profile.name} className="profile-image" />
      <h3>{profile.name}</h3>
      <p>Last Driven at {profile.time}</p>
    </div>
  ));

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  };

  const slidePrev = () => carouselRef.current?.slidePrev();
  const slideNext = () => carouselRef.current?.slideNext();

  return (
    <div className="container">
      <div className="carousel-header">
        <h2>Select a Profile</h2>
      </div>
      <div className="carousel-wrapper">
        <button className="custom-prev-btn" onClick={slidePrev}>
          &#8592;
        </button>
        <AliceCarousel
          ref={carouselRef}
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="responsive"
          disableDotsControls
          disableButtonsControls // Disable default buttons
        />
        <button className="custom-next-btn" onClick={slideNext}>
          &#8594;
        </button>
      </div>
      <Footer /> {/* Untouched Footer */}
    </div>
  );
};

export default ProfileCarousel;
