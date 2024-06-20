import React from "react";
import "../styles/main.scss";
import SwiperSlider from "../components/SwiperSlider";
import Episode from "../components/Episode";
import Location from "../components/Location";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <SwiperSlider />
      <Episode />
      <Location />
    </div>
  );
};

export default Home;
