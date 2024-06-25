import React from "react";
import BadgeImage from "../library/images/badge.png";

const Badge: React.FC = () => {
  return (
    <div className="bg-white w-3/4">
      <img src={BadgeImage} alt="Badge"/>
    </div>
  );
};

export default Badge;
