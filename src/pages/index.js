/* eslint-disable @next/next/no-img-element */
import { Exo_2 } from "next/font/google";
import Styles from "@/pages/index.module.scss";
import Navbar from "@/Components/Layout/Navbar";
const exo2 = Exo_2({ subsets: ["latin"], adjustFontFallback: false });

import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import Slider from "@/Components/Slider";
import dynamic from "next/dynamic";
import Image from "next/image";
import Footer from "@/Components/Layout/Footer";
import Kunjalikutty from "@/assets/images/speakers/Kunjalikutty.png";
import MLA from "@/assets/images/speakers/MLA.png";
import Minister from "@/assets/images/speakers/Minister.png";
import AnishAchuthan from "@/assets/images/speakers/AnishAchuthan.png";
import ShamlalAhamad from "@/assets/images/speakers/ShamlalAhamad.png";
import UshaTitus from "@/assets/images/speakers/UshaTitus.png";
import IbnuJala from "@/assets/images/speakers/IbnuJala.png";
import VimalGovind from "@/assets/images/speakers/VimalGovind.png";
import MabelChacko from "@/assets/images/speakers/MabelChacko.png";
import Tanooraa from "@/assets/images/speakers/Tanooraa.png";
import Riyas from "@/assets/images/speakers/Riyas.png";
import Musthafa from "@/assets/images/speakers/Musthafa.png";
import SanthoshGeorge from "@/assets/images/speakers/SanthoshGeorge.png";
import HariKishore from "@/assets/images/speakers/HariKishore.png";
import AnoopAmbika from "@/assets/images/speakers/AnoopAmbika.png";
import Gopinath from "@/assets/images/speakers/Gopinath.png";
import NavasMeeran from "@/assets/images/speakers/NavasMeeran.png";
import MuhammedMusthafa from "@/assets/images/speakers/MuhammedMusthafa.png";
import Calendar from "@/Components/Icons/Calendar";
import Wave from "@/Components/Icons/scribbles/Wave";
import Scribbles from "@/Components/Scribbles";
import Group1 from "@/Components/Icons/scribbles/Group1";
import Group2 from "@/Components/Icons/scribbles/Group";
import ArrowHead from "@/Components/Icons/scribbles/ArrowHead";
import Group3 from "@/Components/Icons/scribbles/Group3";
import ScholarCap from "@/Components/Icons/ScholarCap";
import Speaker from "@/Components/Icons/Speaker";
import Clock from "@/Components/Icons/Clock";
import UpArrows from "@/Components/Icons/scribbles/UpArrows";
import Rocket from "@/Components/Icons/Rocket";
import { useState } from "react";
import hackathon from "@/assets/images/hackathon.png";
import discussion from "@/assets/images/discussion.png";
import code from "@/assets/images/code.png";
import start from "@/assets/images/start.png";
import colors from "@/assets/images/color.jpeg";
import slider1 from "@/assets/images/slider1.jpeg";
import slider2 from "@/assets/images/slider2.jpeg";
import slider3 from "@/assets/images/slider3.jpeg";
import slider4 from "@/assets/images/slider4.jpeg";
const Countdown = dynamic(() => import("@/Components/Counter"), { ssr: false });
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
export default function Home() {
  const [scheduledTab, setScheduledTab] = useState("Students");
  const slides = [
    () => (
      <div
        className="w-full bg-opacity-20 h-full flex justify-center items-center flex-col relative"
        style={{ background: `url(${slider1.src})` }}
      >
        <div className="custom-container z-[2]">
          <h1 className="text-[18px] lg:text-[42px] font-medium leading-none text-white">
            BE A PART OF OUR
          </h1>
          <h1 className="text-white text-[24px] lg:text-[90px] font-extrabold ">
            GRAND CELEBERATION
          </h1>
          <p className="text-sm lg:text-lg mb-8 text-white">
            OF GROUNDBREAKING BUSINESS IDEAS
          </p>
          <button
            type="button"
            className="bg-primary-cyan shadow-lg shadow-primary-cyan px-8 py-3 rounded-full text-white"
          >
            Register Now
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 z-[1]"></div>
      </div>
    ),
    () => (
      <div
        className="w-full  h-full flex justify-start items-center "
        style={{ background: `url(${slider2.src})` }}
      >
        <div className="custom-container z-[2] flex flex-col justify-center items-center">
          <h1 className="text-[14px] lg:text-[42px] font-medium leading-none text-white uppercase">
            Join the annual conclave that is
          </h1>
          <h1 className="text-white text-[21px] lg:text-[60px] font-extrabold uppercase text-center">
            reshaping Kerala&apos;s startup landscapes
          </h1>
          <p className="text-sm lg:text-lg mb-8 text-white uppercase">
            Your gateway to success awaits!
          </p>
          <button
            type="button"
            className="bg-primary-cyan shadow-lg shadow-primary-cyan px-8 py-3 rounded-full text-white"
          >
            Register Now
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 z-[1]"></div>
      </div>
    ),
    () => (
      <div
        className="w-full h-full flex justify-start items-center "
        style={{ background: `url(${slider4.src})` }}
      >
        <div className="custom-container  z-[2]">
          <h1 className="text-[18px] lg:text-[42px] font-medium leading-none text-white uppercase">
            Witness the convergence of
          </h1>
          <h1 className="text-white text-[24px] lg:text-[90px] font-extrabold uppercase">
            business paths
          </h1>
          <p className="text-sm lg:text-lg mb-8 text-white uppercase">
            It&apos;s the nexus where your business scales new heights!
          </p>
          <button
            type="button"
            className="bg-primary-cyan shadow-lg shadow-primary-cyan px-8 py-3 rounded-full text-white"
          >
            Register Now
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 z-[1]"></div>
      </div>
    ),
    () => (
      <div
        className="w-full bg-black bg-opacity-20 h-full flex justify-start items-center "
        style={{ background: `url(${slider3.src})` }}
      >
        <div className="custom-container  flex justify-center items-center flex-col z-[2]">
          <h1 className="text-[18px] lg:text-[42px] font-medium leading-none text-white uppercase">
            Witness the convergence of
          </h1>
          <h1 className="text-white text-[24px] lg:text-[90px] font-extrabold uppercase">
            business paths
          </h1>
          <p className="text-sm lg:text-lg mb-8 text-white uppercase">
            It&apos;s the nexus where your business scales new heights!
          </p>
          <button
            type="button"
            className="bg-primary-cyan shadow-lg shadow-primary-cyan px-8 py-3 rounded-full text-white"
          >
            Register Now
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 z-[1]"></div>
      </div>
    ),
  ];

  const speakers = [
    {
      image: Minister.src,
      role: "Minister for Industries, Law and Coir in the Government of Kerala",
      name: "P Rajeev",
    },
    {
      image: Kunjalikutty.src,
      role: "MLA Vengara",
      name: "P. K. Kunhalikutty",
    },
    {
      image: MLA.src,
      role: "MLA Perinthalmanna",
      name: "Najeeb Kanthapuram",
    },
    {
      image: AnishAchuthan.src,
      role: "Cofounder & CEO, Open Financial Technologies",
      name: "Anish Achuthan",
    },
    {
      image: ShamlalAhamad.src,
      role: "MD International Relations Malabar Gold & Diamonds",
      name: "Shamlal Ahamed MP",
    },
    {
      image: UshaTitus.src,
      role: "Chairperson and MD, ASAP Kerala",
      name: "Dr Usha Titus",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "Chairman, 33 Holdings Global",
      name: "V P Mohammed Miandad",
    },
    {
      image: IbnuJala.src,
      role: "Founder & CEO, Morfin Versity",
      name: "Ibnu Jala",
    },
    {
      image: VimalGovind.src,
      role: "Co-Founder & CEO, Genrobotics ",
      name: "Vimal Govind MK",
    },
    {
      image: MabelChacko.src,
      role: "Co-Founder & COO, Open Financial Technologies",
      name: "Mabel Chacko",
    },
    {
      image: MuhammedMusthafa.src,
      role: "Founder & CEO, Edroots International",
      name: "Muhammed Musthafa Koori",
    },
    {
      image: Tanooraa.src,
      role: "Founder, Zoul and Zera",
      name: "Tanooraa Swetha Menon",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "CEO & Managing Director, Elance Learning Provider",
      name: "Jishnu PV",
    },
    {
      image: Riyas.src,
      role: "General Manager, Kerala Knowledge Economy Mission",
      name: "Riyas PM",
    },
    {
      image: Musthafa.src,
      role: "CEO, iD Fresh Food India PVT. LTD.",
      name: "PC Musthafa",
    },
    {
      image: SanthoshGeorge.src,
      role: "Santhosh George Kulangara",
      name: "Founder and MD, Safari TV",
    },
    {
      image: HariKishore.src,
      role: "Director, Industries and Commerce Department",
      name: "Harikishore S. IAS",
    },
    {
      image: AnoopAmbika.src,
      role: "CEO, Kerala Startup Mission",
      name: "Anoop Ambika",
    },
    {
      image: Gopinath.src,
      role: "Vice Chancellor, Kerala University of Digital Sciences, Innovation and Technology",
      name: "Saji Gopinath",
    },
    {
      image: NavasMeeran.src,
      role: "Chairman, Group Meeran",
      name: "Navas Meeran",
    },
  ];

  let scribbles = [
    {
      component: (
        <Wave
          className="absolute bottom-[10%] right-[5%]"
          width="200"
          fill="#00B4B8"
        />
      ),
    },
    {
      component: (
        <Wave
          className="absolute bottom-[7%] right-[-1%]"
          width="200"
          fill="#FFCF3F"
        />
      ),
    },
    {
      component: (
        <Group1
          className="absolute bottom-[5%] left-[-1%]"
          width="170"
          fill="#FFCF3F"
        />
      ),
    },
  ];
  let scribblesSecond = [
    {
      component: (
        <Wave
          className="absolute top-[11%] left-[-4%]"
          width="200"
          fill="#CB8DF7"
        />
      ),
    },
    {
      component: (
        <Wave
          className="absolute top-[5%] left-[2%]"
          width="200"
          fill="#FFCF3F"
        />
      ),
    },
  ];
  let aboutScribble = [
    {
      component: (
        <Wave
          className="absolute top-[8%] right-[-9%]"
          width="200"
          fill="#FFCF3F"
        />
      ),
    },
    {
      component: (
        <Wave
          className="absolute top-[5%] right-[-3%]"
          width="200"
          fill="#00B4B8"
        />
      ),
    },
    {
      component: <Group3 className="absolute top-[3%] left-0" width="150" />,
    },
  ];
  let timerScribbles = [
    {
      component: <Wave fill="#FFCF3F" className="absolute top-[55%] left-0" />,
    },
    {
      component: <Wave fill="#FFCF3F" className="absolute top-[55%] right-0" />,
    },
    {
      component: (
        <ArrowHead
          fill="#FFCF3F"
          className="absolute top-[50%] right-[16%] rotate-180"
        />
      ),
    },
    {
      component: (
        <ArrowHead fill="#FFCF3F" className="absolute top-[50%] left-[16%] " />
      ),
    },
  ];
  let aboutSecondScribble = [
    {
      component: <UpArrows className="absolute bottom-[0px] right-0" />,
    },
    {
      component: (
        <Group2 className="absolute bottom-[5%] left-[2%]" height="250" />
      ),
    },
  ];

  let aboutCards = [
    {
      title: "Studens",
      description:
        "Engage in vibrant discussions, panels, and workshops to share and absorb industry insights",
      icon: <ScholarCap />,
    },
    {
      title: "Startups",
      description:
        "Explore the innovative landscape as we showcase startups from Kerala and beyond.",
      icon: <Rocket />,
    },
    {
      title: "Local Business/SMEs",
      description:
        "Witness the acknowledgement of outstanding startups, entrepreneurs, and contributors.",
      icon: <Speaker />,
    },
    {
      title: "NREs",
      description:
        "Stay ahead of the curve with hands-on workshops on cutting-edge technologies and emerging trends.",
      icon: <Clock />,
    },
  ];

  let highLighEvents = [
    {
      title: "Students Track",
      card: [
        {
          image: discussion.src,
          title: "Medical Hackathon",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: code.src,
          title: "Idea Pitching",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: start.src,
          title: "3D Printing Workshop          ",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: hackathon.src,
          title: "AI & ML Workshop",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
      ],
    },
    {
      title: " Startup Track",
      card: [
        {
          image: discussion.src,
          title: "Panel Discussion",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: code.src,
          title: "Mrs & Mr Startup",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: hackathon.src,
          title: "Let's talk about Startup ",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
      ],
    },
    {
      title: " Local Business Owners/SMEs Track",
      card: [
        {
          image: discussion.src,
          title: "Kerala to the Globe",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: code.src,
          title: "How to Sell Online",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: hackathon.src,
          title: "Branding Workshop",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
      ],
    },
    {
      title: "NRE/Investors ",
      card: [
        {
          image: discussion.src,
          title: "Investors Clinic",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
      ],
    },
    {
      title: "Artisans/Hobbyists ",
      card: [
        {
          image: discussion.src,
          title: "Resin Art Workshop",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: code.src,
          title: "Knitting Workshop",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: hackathon.src,
          title: "Cookathon",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: colors.src,
          title: "Arduino Workshop",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
      ],
    },
  ];

  const scheduleTab = [
    {
      name: "Main Venue",
      icon: (name) => (
        <ScholarCap
          className={` max-h-[50px] absolute right-0 top-[-5px] ${
            scheduledTab === name ? "fill-primary-cyan" : "fill-gray-400"
          }`}
        />
      ),
    },
    {
      name: "Hall 1",
      icon: (name) => (
        <Rocket
          className={` max-h-[50px] absolute right-0 top-[-5px] ${
            scheduledTab === name ? "fill-primary-cyan" : "fill-gray-400"
          }`}
        />
      ),
    },
    {
      name: "Hall 2",
      icon: (name) => (
        <Speaker
          className={` max-h-[50px] absolute right-0 top-[-5px] ${
            scheduledTab === name ? "fill-primary-cyan" : "fill-gray-400"
          }`}
        />
      ),
    },
    {
      name: "Hall 3",
      icon: (name) => (
        <Clock
          className={` max-h-[50px] absolute right-0 top-[-5px] ${
            scheduledTab === name ? "fill-primary-cyan" : "fill-gray-400"
          }`}
        />
      ),
    },
    {
      name: "Hall 4",
      icon: (name) => (
        <Clock
          className={` max-h-[50px] absolute right-0 top-[-5px] ${
            scheduledTab === name ? "fill-primary-cyan" : "fill-gray-400"
          }`}
        />
      ),
    },
  ];
  const targetDate = new Date("2024-01-01T00:00:00");
  return (
    <div className={exo2.className}>
      <div className={`${Styles["main-container"]} relative overflow-hidden`}>
        <div className="relative">
          <Navbar />

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
              className="mySwiper h-screen md:h-screen  z-[10]"
              slides={slides}
            />
          </div>
        </div>
        <Scribbles scribbles={scribbles} />
      </div>
      <div className="  lg:h-[75vh] py-[100px] relative overflow-hidden">
        <div className="custom-container flex justify-center items-center h-full">
          <div className="bg-white w-full grid grid-cols-2 lg:grid-cols-4  lg:gap-x-12  ">
            <div className="col-span-2 my-auto items-center">
              <div className="grid grid-cols-12 p-1">
                <div className=" col-span-6 bg-primary-purple h-[120px] mr-3 rounded-md flex flex-col items-center justify-center">
                  <h1 className="text-[30px] font-extrabold text-primary-yellow">
                    5000 +
                  </h1>

                  <p className="text-white text-[20px] font-normal">
                    Total Attendees
                  </p>
                </div>
                <div className=" col-span-6 rounded-md bg-primary-yellow flex flex-col items-center justify-center  ">
                  <h1 className="text-primary-blue text-[30px] font-extrabold">
                    300 +
                  </h1>
                  <p className="text-primary-blue text-[20px] font-normal">
                    Local Business Heroes
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 p-2">
                <div className="flex items-center justify-center gap-2 col-span-8 bg-primary-cyan h-[120px] mr-3 rounded-md">
                  <h1 className="text-primary-yellow text-[30px] font-extrabold">
                    150 +
                  </h1>
                  <p className="text-white text-[20px] font-normal">
                    Participating <br /> Educational Institutions
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center col-span-4 bg-primary-purple rounded-md">
                  <h1 className="text-white text-[30px] font-extrabold">
                    20 +
                  </h1>
                  <p className="text-primary-cyan text-[20px] font-normal">
                    Investors
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-4 col-span-2 h-[300px] w-full rounded-lg overflow-hidden">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=LfDRCktozmk"
                height={"150%"}
                width={"120%"}
              />
            </div>
          </div>
        </div>
        <Scribbles scribbles={scribblesSecond} />
      </div>

      {/* COUNTER  */}
      <div className={`${Styles["counter-bg"]} md:h-[50vh]`}>
        <div className="custom-container h-full py-[70px] flex justify-center items-center">
          <div className="z-[10] relative flex justify-center items-center flex-col">
            <h1 className="text-black font-bold text-[16px] md:text-[24px] mb-[30px]">
              The Countdown Has Begun
            </h1>
            <Countdown targetDate={targetDate} />
          </div>
        </div>
        <Scribbles scribbles={timerScribbles} />
      </div>
      {/* /COUNTER  */}

      <div className="py-[100px] relative overflow-hidden">
        <div className="custom-container relative">
          <div className="py-[100px]">
            <h1 className="title purple-before text-[36px]">who can attend</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 ">
              {aboutCards.map((card, index) => (
                <div className={Styles["about-card"]} key={index}>
                  {card.icon}
                  <div className="py-4 h-full">
                    <h1 className={Styles["card-heading"]}>{card.title}</h1>
                    <p className="mb-4 line-clamp-3">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Scribbles scribbles={aboutScribble} />
      </div>
      <div
        className={`${Styles["scaleup-container"]} py-[100px] h-[75vh] relative  bg-primary-purple`}
      >
        <div className="custom-container grid grid-cols-2 gap-x-8">
          <div className="">
            <h1 className="title  text-[36px]" style={{ color: "white" }}>
              SCALEUP CONCLAVE 2024
            </h1>
            <p className="text-white mb-5">
              Is the first edition of an annual celebratory platform that fuses
              you with entrepreneurs, investors, professionals, and business
              enthusiasts for a comprehensive two-day event. It promotes
              inspiration, knowledge exchange, and networking opportunities.
            </p>
            <p className="text-white mb-4">
              Bringing together innovation, expertise, and entrepreneurial
              ethos, this conclave aims to propel Kerala&apos;s startup
              ecosystem to unprecedented heights.
            </p>
          </div>
          <div className="">
            <h1 className="title  text-[36px]" style={{ color: "white" }}>
              Scaleup Village
            </h1>
            <p className="text-white mb-5">
              The thrill sparked at the ScaleUp Conclave isn&apos;t merely
              fleeting. It signals the inception of the catalytic centre,
              ScaleUp Village, propelling our commitment to transformation.
            </p>
            <p className="text-white mb-4">
              ScaleUp Village is not just an industrial park but a dedicated
              space focused on Direct-to-Consumer (D2C) innovation,
              first-of-its-kind in India. With a planned launch within six
              months, this hub aims to revolutionize the entrepreneurial
              landscape, providing startups and businesses with an environment
              tailored for success.
            </p>
          </div>
        </div>
        <Scribbles scribbles={aboutSecondScribble} />
      </div>
      <div className="py-[100px]">
        <div className="custom-container">
          <h1 className="title text-[36px] wave-before">OUR SPEAKERS</h1>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-5 ">
          {speakers.map((speaker, index) => (
            <div
              className={`relative w-full ${Styles["speaker"]} h-[500px]`}
              key={index}
            >
              <Image
                width={350}
                height={500}
                src={speaker.image}
                className="w-full"
                alt="speaker"
              />
              <div className="w-full absolute bottom-0 bg-[#ffffff] h-[100px] px-8 py-2">
                <h1 className="text-primary-purple font-bold text-lg">
                  {speaker.name}
                </h1>
                <p className="text-primary-purple text-sm ">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-[100px] custom-container">
        {highLighEvents.map((event, key) => (
          <div className="py-[50px] custom-container" key={key}>
            <>
              <h1
                className={` title wave-before ${
                  key == 4 ? "text-[30px]" : "text-[36px]"
                }`}
              >
                {event.title}
              </h1>
              <div className="grid grid-cols-12 gap-x-6 mt-[20px]">
                {event.card.map((card, key) => (
                  <div
                    className="bg-white border shadow-lg rounded-xl p-4 col-span-12 lg:col-span-4 mb-5"
                    key={key}
                  >
                    <div className=" items-end " key={key}>
                      <img
                        src={card.image}
                        className="w-full h-[200px] rounded-md"
                        width="100"
                        height="100"
                        alt=""
                        quality={100}
                      />
                    </div>
                    <h1 className="title ">{card.title}</h1>

                    <div className="flex flex-col justify-between items-end ">
                      <div className="">
                        <p className="text-text-muted">
                          Engage in vibrant discussions, panels, and workshops
                          to share and absorb industry insights
                        </p>
                      </div>
                      <button
                        type="button"
                        className="rounded-full uppercase bg-primary-purple text-white w-1/2 py-2 mt-4"
                      >
                        JOIN NOW
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          </div>
        ))}
      </div>

      <div className="py-[100px] custom-container">
        <h1 className="text-[36px] title">SHEDULE</h1>
        <div className="custom-container flex gap-x-6 justify-center items-center  pb-6 overflow-auto">
          <div className="bg-gray-200 h-[50px] w-[250px] relative overflow-hidden">
            <h1 className="font-semibold text-[15px] lg:text-[20px] p-3 text-gray-400 ">
              Day 1
            </h1>
            <h1
              className=" absolute right-0 bottom-[-10px] text-[30px] lg:text-[45px] font-semibold
             text-gray-400 max-h-[50px] overflow-hidden"
            >
              2 Feb
            </h1>
          </div>
          <div className="bg-gray-200 h-[50px] w-[250px] relative overflow-hidden">
            <h1 className="font-semibold text-[15px] lg:text-[20px] p-3 text-gray-400 ">
              Day 2
            </h1>
            <h1
              className=" absolute right-0 bottom-[-10px] text-[30px] lg:text-[45px] font-semibold
             text-gray-400 max-h-[50px] overflow-hidden"
            >
              3 Feb
            </h1>
          </div>
        </div>
        <div className="flex overflow-auto gap-x-6">
          {scheduleTab.map((tab, index) => (
            <div
              key={index}
              className=" py-4 px-5 bg-gray-200  w-full min-w-[220px] flex items-center justify-between  overflow-hidden relative"
            >
              <h1
                className={`font-semibold text-[20px] ${
                  scheduledTab !== tab.name && "text-gray-400"
                }`}
              >
                {tab.name}
              </h1>
              {tab.icon(tab.name)}
            </div>
          ))}
        </div>

        <div class="container mx-auto">
          <div className=" bg-primary-cyan mt-[50px]">
            <div className="flex px-4 items-center ">
              <Calendar width="20" fill="white" />
              <h1 className="text-white ml-3">Main Events</h1>
            </div>
          </div>
          <div class="w-full overflow-auto">
            <div class="bg-white shadow-md rounded ">
              <div class="flex flex-col">
                <div class="flex flex-row border-b border-gray-200">
                  <div class="w-full md:w-1/4 py-3 px-6 text-left">
                    <img src={Minister.src} width={100} height={90} alt="" />
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-left flex justify-center items-center flex-col">
                    <div className="text-[20px] font-semibold">14</div>
                    <div>February</div>
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center flex-col">
                    <h1 className="text-[15px] font-semibold whitespace-nowrap">
                      Conference in Amsterdam
                    </h1>
                    <p className="text-[14px] font-semibold whitespace-nowrap">
                      08 AM 04 PM
                    </p>
                    <p className="text-[10px] font-normal text-gray-500 whitespace-nowrap">
                      Speaker: Daniel Hill
                    </p>
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center">
                    <button className="rounded-2xl bg-primary-cyan text-white px-10 py-2 text-[10px]">
                      Read More
                    </button>
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center">
                    <a
                      className="text-primary-cyan text-[12px] font-semibold underline underline-primary-cyan"
                      href=""
                    >
                      Join Whatsapp
                    </a>
                  </div>
                </div>
                <div class="flex flex-row border-b border-gray-200">
                  <div class="w-full md:w-1/4 py-3 px-6 text-left">
                    <img src={Minister.src} width={100} height={90} alt="" />
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-left flex justify-center items-center flex-col">
                    <div className="text-[20px] font-semibold">14</div>
                    <div>February</div>
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center flex-col">
                    <h1 className="text-[15px] font-semibold whitespace-nowrap">
                      Conference in Amsterdam
                    </h1>
                    <p className="text-[14px] font-semibold whitespace-nowrap">
                      08 AM 04 PM
                    </p>
                    <p className="text-[10px] font-normal text-gray-500 whitespace-nowrap">
                      Speaker: Daniel Hill
                    </p>
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center">
                    <button className="rounded-2xl bg-primary-cyan text-white px-10 py-2 text-[10px]">
                      Read More
                    </button>
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center">
                    <a
                      className="text-primary-cyan text-[12px] font-semibold underline underline-primary-cyan"
                      href=""
                    >
                      Join Whatsapp
                    </a>
                  </div>
                </div>
                <div class="flex flex-row border-b border-gray-200">
                  <div class="w-full md:w-1/4 py-3 px-6 text-left">
                    <img src={Minister.src} width={100} height={90} alt="" />
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-left flex justify-center items-center flex-col">
                    <div className="text-[20px] font-semibold">14</div>
                    <div>February</div>
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center flex-col">
                    <h1 className="text-[15px] font-semibold whitespace-nowrap">
                      Conference in Amsterdam
                    </h1>
                    <p className="text-[14px] font-semibold whitespace-nowrap">
                      08 AM 04 PM
                    </p>
                    <p className="text-[10px] font-normal text-gray-500 whitespace-nowrap">
                      Speaker: Daniel Hill
                    </p>
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center">
                    <button className="rounded-2xl bg-primary-cyan text-white px-10 py-2 text-[10px]">
                      Read More
                    </button>
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center">
                    <a
                      className="text-primary-cyan text-[12px] font-semibold underline underline-primary-cyan"
                      href=""
                    >
                      Join Whatsapp
                    </a>
                  </div>
                </div>
                <div class="flex flex-row border-b border-gray-200">
                  <div class="w-full md:w-1/4 py-3 px-6 text-left">
                    <img src={Minister.src} width={100} height={90} alt="" />
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-left flex justify-center items-center flex-col">
                    <div className="text-[20px] font-semibold">14</div>
                    <div>February</div>
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center flex-col">
                    <h1 className="text-[15px] font-semibold whitespace-nowrap">
                      Conference in Amsterdam
                    </h1>
                    <p className="text-[14px] font-semibold whitespace-nowrap">
                      08 AM 04 PM
                    </p>
                    <p className="text-[10px] font-normal text-gray-500 whitespace-nowrap">
                      Speaker: Daniel Hill
                    </p>
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center">
                    <button className="rounded-2xl bg-primary-cyan text-white px-10 py-2 text-[10px]">
                      Read More
                    </button>
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center">
                    <a
                      className="text-primary-cyan text-[12px] font-semibold underline underline-primary-cyan"
                      href=""
                    >
                      Join Whatsapp
                    </a>
                  </div>
                </div>
                <div class="flex flex-row border-b border-gray-200">
                  <div class="w-full md:w-1/4 py-3 px-6 text-left">
                    <img src={Minister.src} width={100} height={90} alt="" />
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-left flex justify-center items-center flex-col">
                    <div className="text-[20px] font-semibold">14</div>
                    <div>February</div>
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center flex-col">
                    <h1 className="text-[15px] font-semibold whitespace-nowrap">
                      Conference in Amsterdam
                    </h1>
                    <p className="text-[14px] font-semibold whitespace-nowrap">
                      08 AM 04 PM
                    </p>
                    <p className="text-[10px] font-normal text-gray-500 whitespace-nowrap">
                      Speaker: Daniel Hill
                    </p>
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center">
                    <button className="rounded-2xl bg-primary-cyan text-white px-10 py-2 text-[10px]">
                      Read More
                    </button>
                  </div>
                  <div class="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center">
                    <a
                      className="text-primary-cyan text-[12px] font-semibold underline underline-primary-cyan"
                      href=""
                    >
                      Join Whatsapp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={`${Styles["registration-bg"]} lg:h-[50vh] py-[100px] `}>
        <div className="custom-container grid grid-cols-10 gap-x-4">
          <div className="col-span-10 mb-5">
            <h1
              className="title text-[36px] text-white cyan-before"
              style={{ color: "white" }}
            >
              GET YOUR TIKETS
            </h1>
          </div>

          <div className="col-span-10 lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-x-4">
            <div>
              <label className="label text-white">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input"
              />
            </div>
            <div>
              <label className="label text-white">Phone Number</label>
              <input
                type="text"
                name="name"
                placeholder="Phone Number"
                className="input"
              />
            </div>
          </div>

          <div className="col-span-10 lg:col-span-2 flex justify-center items-center">
            <button
              type="button"
              className="w-full bg-primary-cyan  px-8 py-3 rounded-full text-white"
            >
              Register
            </button>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
