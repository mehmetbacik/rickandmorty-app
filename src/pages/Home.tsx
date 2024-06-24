import React from "react";
import "../styles/main.scss";
import SwiperSlider from "../components/SwiperSlider";
import Episode from "../components/Episode";
import Location from "../components/Location";
import Badge from "../components/Badge";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center gap-6 mb-6">
        <SwiperSlider />
        <Badge />
      </div>
      <div className="flex flex-col items-center gap-6 mb-6">
        <Episode />
        <Location />
      </div>
    </div>
  );
};

export default Home;
