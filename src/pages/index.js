import { Montserrat } from "next/font/google";
import Styles from "@/pages/index.module.scss";
import Navbar from "@/Components/Layout/Navbar";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
const montserrat = Montserrat({ subsets: ["latin"] });

import { EffectFade, Autoplay } from "swiper/modules";
import Slider from "@/Components/Slider";

export default function Home() {
  const slides = [
    () => (
      <div className="w-full bg-black bg-opacity-20 h-full flex justify-center items-center flex-col">
        <div className="mx-auto w-full  md:max-w-[1140px] flex justify-center items-center flex-col">
          <h1 className="text-[18px] md:text-[42px] font-medium leading-none text-white">
            PREPARE YOURSELF FOR THE
          </h1>
          <h1 className="text-[#f50136] text-[46px] md:text-[90px] font-extrabold ">
            CONFERENCE
          </h1>
          <p className="text-sm md:text-lg mb-8">
            12-14 FEBRUARY 2018-LOS ANGELES, CA
          </p>
          <button type="button" className="bg-[#f50136] px-8 py-3 rounded-full">
            BUY TICKETS NOW
          </button>
        </div>
      </div>
    ),
    () => (
      <div className="w-full bg-black bg-opacity-20 h-full flex justify-start items-center ">
        <div className="px-4 md:px-0 mx-auto w-full md:max-w-[1140px] max-w-[800px] flex justify-center items-start flex-col">
          <h1 className="text-[18px] md:text-[42px] font-medium leading-none text-white">
            PREPARE YOURSELF FOR THE
          </h1>
          <h1 className="text-[#f50136] text-[46px] md:text-[90px] font-extrabold ">
            CONFERENCE
          </h1>
          <p className="text-sm md:text-lg mb-8">
            12-14 FEBRUARY 2018-LOS ANGELES, CA
          </p>
          <button type="button" className="bg-[#f50136] px-8 py-3 rounded-full">
            BUY TICKETS NOW
          </button>
        </div>
      </div>
    ),
  ];
  return (
    <div className={`${Styles["main-container"]} ${montserrat.className}`}>
      <div className="mx-auto w-full max-w-[1140px] ">
        <Navbar />
      </div>
      <div>
        <Slider
          spaceBetween={30}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
          }}
          modules={[EffectFade, Autoplay]}
          className="mySwiper h-[80vh]"
          slides={slides}
        />
      </div>
    </div>
  );
}
