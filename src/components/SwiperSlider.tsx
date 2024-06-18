import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Banner1 from "../library/images/banner1.jpg";
import Banner2 from "../library/images/banner2.jpg";
import Banner3 from "../library/images/banner3.jpg";

const SwiperSlider: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: Banner1,
      title: "Rick Sanchez",
    },
    {
      id: 2,
      image: Banner2,
      title: "Morty Smith",
    },
    {
      id: 3,
      image: Banner3,
      title: "Summer Smith",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full max-h-96 object-cover"
              />
              <h3 className="text-center mt-4">{slide.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
