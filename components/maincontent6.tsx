import React, { useState } from "react";
import { useRouter } from "next/router";

const MainContent6: React.FC = () => {
  const router = useRouter();
  const { profileName } = router.query; // Extract profileName from query parameters
  const [isClicked, setIsClicked] = useState(false); // State to handle button click
  const [buttonText, setButtonText] = useState("GO WIPOD"); // State for button text

  const handleButtonClick = () => {
    setIsClicked(true); // Trigger the animation
    setButtonText("Starting..."); // Update button text
    setTimeout(() => {
      router.push("/mode"); // Redirect after animation
    }, 2000); // Delay for animation duration
  };

  return (
    <div className="main-content-xy29">
      <img
        src="/images/car9.svg"
        alt="WIPOD Car"
        className="car-image-xy29 animated-car"
      />
      <div className="welcome-text-xy29">
        <h1>
          Welcome to <strong>WIPOD</strong>
        </h1>
        <h2>
          Hello {profileName || "Billy"}! Where do you want to go today?
        </h2>
        <button
          className={`action-button-xy29 ${isClicked ? "clicked" : ""}`}
          onClick={handleButtonClick}
        >
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export default MainContent6;
