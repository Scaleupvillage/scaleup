import { useSwiper } from "swiper/react";
import Styles from "@/Components/Slider/sldier.module.scss";
const SliderPagination = ({ slideLength }) => {
  const swiper = useSwiper();
  console.log(Array.from(Array(slideLength).keys()));
  return (
    <div className="absolute bottom-0">
      <div className={Styles["slider-pagination"]}></div>
    </div>
  );
};

export default SliderPagination;
