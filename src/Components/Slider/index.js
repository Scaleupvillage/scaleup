import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SliderPagination from "./SliderPagination";

const Slider = ({ slides, ...props }) => {
  return (
    <div>
      <Swiper {...props}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide()}</SwiperSlide>
        ))}
        <SliderPagination slideLength={slides.length} />
      </Swiper>
    </div>
  );
};

export default Slider;
