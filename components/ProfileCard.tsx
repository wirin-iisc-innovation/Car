// components/ProfileCard.tsx

import React from "react";

interface ProfileCardProps {
  name: string;
  time: string;
  image: string;
  onClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, time, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        textAlign: "center",
        cursor: "pointer",
        padding: "1rem",
        borderRadius: "10px",
        backgroundColor: "#334155",
        maxWidth: "150px",
        margin: "0 auto",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          borderRadius: "10px",
          width: "10px",
          height: "10px",
          marginBottom: "1rem",
        }}
      />
      <h3 style={{ color: "#fff", fontSize: "16px" }}>{name}</h3>
      <p style={{ color: "#94a3b8", fontSize: "14px" }}>Last Driven at {time}</p>
    </div>
  );
};

export default ProfileCard;
