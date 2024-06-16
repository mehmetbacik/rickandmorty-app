import React from "react";
import "../styles/main.scss";
import SwiperSlider from "../components/SwiperSlider";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <SwiperSlider />
    </div>
  );
};

export default Home;
