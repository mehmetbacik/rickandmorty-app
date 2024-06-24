import React from "react";
import BadgeImage from "../library/images/badge.png";

const Badge: React.FC = () => {
  return (
    <div className="bg-white">
      <img src={BadgeImage} alt="Badge"/>
    </div>
  );
};

export default Badge;
