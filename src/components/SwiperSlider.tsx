import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SwiperSlider: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      title: "Rick Sanchez",
    },
    {
      id: 2,
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      title: "Morty Smith",
    },
    {
      id: 3,
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      title: "Summer Smith",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
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
                className="w-full h-auto"
              />
              <h3>{slide.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
