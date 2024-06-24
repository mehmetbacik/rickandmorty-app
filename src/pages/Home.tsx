import React from "react";
import "../styles/main.scss";
import SwiperSlider from "../components/SwiperSlider";
import Episode from "../components/Episode";
import Location from "../components/Location";
import Badge from "../components/Badge";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <SwiperSlider />
      <Badge />
      <Episode />
      <Location />
    </div>
  );
};

export default Home;
