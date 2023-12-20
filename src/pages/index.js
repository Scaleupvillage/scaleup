import { Montserrat } from "next/font/google";
import Styles from "@/pages/index.module.scss";
import Navbar from "@/Components/Layout/Navbar";
const montserrat = Montserrat({ subsets: ["latin"] });

import { EffectFade, Autoplay } from "swiper/modules";
import Slider from "@/Components/Slider";
import { Icon } from "@iconify/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Footer from "@/Components/Layout/Footer";
const Countdown = dynamic(() => import("@/Components/Counter"), { ssr: false });
export default function Home() {
  const slides = [
    () => (
      <div className="w-full bg-black bg-opacity-20 h-full flex justify-center items-center flex-col">
        <div className="custom-container flex justify-center items-center flex-col">
          <h1 className="text-[18px] lg:text-[42px] font-medium leading-none text-white">
            BE A PART OF OUR
          </h1>
          <h1 className="text-[#f50136] text-[28px] lg:text-[90px] font-extrabold ">
            GRAND CELEBERATION
          </h1>
          <p className="text-sm lg:text-lg mb-8 text-white">
            OF GROUNDBREAKING BUSINESS IDEAS
          </p>
          <button
            type="button"
            className="bg-[#f50136] px-8 py-3 rounded-full text-white"
          >
            BUY TICKETS NOW
          </button>
        </div>
      </div>
    ),
    () => (
      <div className="w-full bg-black bg-opacity-20 h-full flex justify-start items-center ">
        <div className="px-4 md:px-0 custom-container flex justify-center items-start flex-col">
          <h1 className="text-[16px] lg:text-[42px] font-medium leading-none text-white uppercase">
            Join the annual conclave that is
          </h1>
          <h1 className="text-[#f50136] text-[24px] lg:text-[90px] font-extrabold uppercase">
            reshaping Kerala&apos;s startup landscapes
          </h1>
          <p className="text-sm lg:text-lg mb-8 text-white uppercase">
            Your gateway to success awaits!
          </p>
          <button
            type="button"
            className="bg-[#f50136] px-8 py-3 rounded-full text-white"
          >
            BUY TICKETS NOW
          </button>
        </div>
      </div>
    ),
    () => (
      <div className="w-full bg-black bg-opacity-20 h-full flex justify-start items-center ">
        <div className="custom-container  flex justify-center items-start flex-col">
          <h1 className="text-[18px] lg:text-[42px] font-medium leading-none text-white uppercase">
            Witness the convergence of
          </h1>
          <h1 className="text-[#f50136] text-[28px] lg:text-[90px] font-extrabold uppercase">
            business paths
          </h1>
          <p className="text-sm lg:text-lg mb-8 text-white uppercase">
            It&apos;s the nexus where your business scales new heights!
          </p>
          <button
            type="button"
            className="bg-[#f50136] px-8 py-3 rounded-full text-white"
          >
            BUY TICKETS NOW
          </button>
        </div>
      </div>
    ),
  ];

  const speakers = [
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "CEO  comapny",
      name: "James Oliver",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "CEO  comapny",
      name: "James Oliver",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "CEO  comapny",
      name: "James Oliver",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "CEO  comapny",
      name: "James Oliver",
    },
  ];
  const targetDate = new Date("2024-01-01T00:00:00");
  return (
    <div>
      <div className={`${Styles["main-container"]} ${montserrat.className}`}>
        <div>
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
              className="mySwiper h-screen md:h-[80vh]"
              slides={slides}
            />
          </div>
        </div>
      </div>
      <div className="  h-[50vh] ">
        <div className="custom-container flex justify-center items-center h-full">
          <div className="bg-white w-full grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-x-12   ">
            <div className="flex justify-center items-center gap-x-4">
              <Icon
                icon="ant-design:calendar-outlined"
                color="#f50136"
                width="70"
              />
              <div className=" flex flex-col justify-center">
                <h1 className="text-[18px] font-medium">DATE</h1>
                <h1 className="text-[14px]">12-14 february 2018</h1>
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-4">
              <Icon icon="ei:location" color="#f50136" width="70" />
              <div className=" flex flex-col justify-center">
                <h1 className="text-[18px] font-medium">LOCATION</h1>
                <h1 className="text-[14px]">Los Angeles, CA. </h1>
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-4">
              <Icon icon="el:user" color="#f50136" width="65" />
              <div className=" flex flex-col justify-center">
                <h1 className="text-[18px] font-medium">SPEAKERS</h1>
                <h1 className="text-[14px]">Natalie James + guests</h1>
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-4">
              <Icon
                icon="ant-design:calendar-outlined"
                color="#f50136"
                width="70"
              />
              <div className=" flex flex-col justify-center">
                <h1 className="text-[18px] font-medium">TICKETS</h1>
                <h1 className="text-[14px]">$65 early bird</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COUNTER  */}
      <div className={`${Styles["counter-bg"]} md:h-[50vh]`}>
        <div className={`${Styles["overlay"]} z-[1]`}></div>

        <div className="mx-auto w-full max-w-[800px] h-full py-[70px] flex justify-center items-center">
          <div className="z-[10] relative flex justify-center items-center flex-col">
            <h1 className="text-white font-bold text-[16px] md:text-[24px] mb-[30px]">
              Counter until the big event
            </h1>
            <Countdown targetDate={targetDate} />
          </div>
        </div>
      </div>
      {/* /COUNTER  */}

      <div className="py-[100px] custom-container">
        <h1 className="title text-[36px]">ABOUT THE EVENT</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing eli. Integer
          iaculis in lacus a sollicitudin. Ut hendrerit hendrerit nisl a
          accumsan. Pellentesque convallis consectetur tortor id placerat.
          Curabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at
          volutpat ligula euismod. In rhoncus massa nec sollicitudin. Ut
          hendrerit hendrerit nisl a accumsan. Pellentesque convallis
          consectetur tortor id placerat. Curabitur a pulvinar nunc. Maecenas
          laoreet finibus lectus, at volutpat ligula euismod quis. Maecenas
          ornare, ex in malesuada tempus.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 ">
          <div className={Styles["about-card"]}>
            <Icon
              icon="ph:microphone"
              width="70"
              className="mic"
              color="#f50136"
            />
            <div className="py-4">
              <h1 className={Styles["card-heading"]}>9 Speakers</h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet,consectetur adipiscing elit. In
                rhoncus massa nec graviante.at volutpat ligula euismod quis.
                Maecenas ornare, ex in malesuada tempus.
              </p>
              <a href="" className={Styles["card-link"]}>
                Read More
              </a>
            </div>
          </div>
          <div className={Styles["about-card"]}>
            <Icon
              icon="ph:microphone"
              width="70"
              className="mic"
              color="#f50136"
            />
            <div className="py-4">
              <h1 className={Styles["card-heading"]}>9 Speakers</h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet,consectetur adipiscing elit. In
                rhoncus massa nec graviante.at volutpat ligula euismod quis.
                Maecenas ornare, ex in malesuada tempus.
              </p>
              <a href="" className={Styles["card-link"]}>
                Read More
              </a>
            </div>
          </div>
          <div className={Styles["about-card"]}>
            <Icon
              icon="ph:microphone"
              width="70"
              className="mic"
              color="#f50136"
            />
            <div className="py-4">
              <h1 className={Styles["card-heading"]}>9 Speakers</h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet,consectetur adipiscing elit. In
                rhoncus massa nec graviante.at volutpat ligula euismod quis.
                Maecenas ornare, ex in malesuada tempus.
              </p>
              <a href="" className={Styles["card-link"]}>
                Read More
              </a>
            </div>
          </div>
          <div className={Styles["about-card"]}>
            <Icon
              icon="ph:microphone"
              width="70"
              className="mic"
              color="#f50136"
            />
            <div className="py-4">
              <h1 className={Styles["card-heading"]}>9 Speakers</h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet,consectetur adipiscing elit. In
                rhoncus massa nec graviante.at volutpat ligula euismod quis.
                Maecenas ornare, ex in malesuada tempus.
              </p>
              <a href="" className={Styles["card-link"]}>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[100] grid grid-cols-1 lg:grid-cols-4">
        {speakers.map((speaker, index) => (
          <div className={`relative w-full ${Styles["speaker"]}`} key={index}>
            <Image
              width={350}
              height={450}
              src={speaker.image}
              className="w-full"
              alt="speaker"
            />
            <div className="absolute bottom-5 bg-[#18181c] px-8 py-2">
              <h1 className="text-primary">{speaker.name}</h1>
              <p className="text-white">{speaker.role}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
