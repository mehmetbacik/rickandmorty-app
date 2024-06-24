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
      title: "Lorem ipsum dolor",
      description:
        "Sit amet consectetur adipisicing elit. Aliquam facilis debitis illum.",
      url: "/list",
    },
    {
      id: 2,
      image: Banner2,
      title: "Quidem a perferendis",
      description: "Laudantium sed, obcaecati amet animi blanditiis beatae.",
      url: "/locations",
    },
    {
      id: 3,
      image: Banner3,
      title: "Sapiente doloribus",
      description: "Nam praesentium iure, dolores aut magnam.",
      url: "/episodes",
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
        /*pagination={{
          clickable: true,
        }}*/
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full max-h-96 object-cover"
              />
              <div className="slide-content absolute top-0 right-0 bg-white p-2">
                <span>{slide.title}</span>
                <p>{slide.description}</p>
                <a href={slide.url}>Link</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
