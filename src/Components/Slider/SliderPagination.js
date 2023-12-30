import { useSwiper, useSwiperSlide } from "swiper/react";
import Styles from "@/Components/Slider/sldier.module.scss";
const SliderPagination = ({ slideLength }) => {
  const swiper = useSwiper();
  
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[1]">
      <div className="relative flex">
        <div className={`${Styles["slider-pagination"]} flex `}></div>
        <div className="absolute z-[3] w-full h-full flex justify-center items-center gap-x-3">
          {Array.from(Array(slideLength).keys()).map((slideIndex) => (
            <div
              role="button"
              key={slideIndex}
              className={`px-3 py-1 border  rounded-lg font-semibold`}
              onClick={() => swiper.slideTo(slideIndex)}
            >
              {slideIndex + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderPagination;
