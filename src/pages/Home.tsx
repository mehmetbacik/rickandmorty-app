import React from "react";
import "../styles/main.scss";
import SwiperSlider from "../components/SwiperSlider";
import Episode from "../components/Episode";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <SwiperSlider />
      <Episode />
    </div>
  );
};

export default Home;
