import React from "react";
import ArrowHead from "../Icons/scribbles/ArrowHead";
import { useSwiper } from "swiper/react";

const SliderSidePagination = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button
        type="button"
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 w-[50px] h-full bg-gradient-to-r from-[rgba(255,255,255,.3)] to-white flex justify-center items-center"
        onClick={() => swiper.slideNext()}
      >
        <ArrowHead fill="#803e97" className="w-[20px]" />
      </button>
      <button
        type="button"
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 w-[50px] h-full bg-gradient-to-l from-[rgba(255,255,255,.3)] to-white flex justify-center items-center"
        onClick={() => swiper.slidePrev()}
      >
        <ArrowHead fill="#803e97" className="rotate-180 w-[20px]" />
      </button>
    </div>
  );
};

export default SliderSidePagination;
