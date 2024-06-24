import React from "react";
import BadgeImage from "../library/images/badge.png";

const Badge: React.FC = () => {
  return (
    <div>
      <img src={BadgeImage} alt="Badge" />
    </div>
  );
};

export default Badge;
