/* eslint-disable @next/next/no-img-element */
import { Exo_2 } from "next/font/google";
import Styles from "@/pages/index.module.scss";
import Navbar from "@/Components/Layout/Navbar";
const exo2 = Exo_2({ subsets: ["latin"], adjustFontFallback: false });
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
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
import shreyasmv from "@/assets/images/speakers/shreyasmv.png";
import deepak from "@/assets/images/speakers/deepak.png";
import miandad from "@/assets/images/speakers/miandad.png";
import gopinathmuthukad from "@/assets/images/speakers/gopinathmuthukad.png";
import hassan from "@/assets/images/speakers/hassan.png";
import majeed from "@/assets/images/speakers/majeed.png";
import nadeemsafran from "@/assets/images/speakers/nadeemsafran.png";
import Calendar from "@/Components/Icons/Calendar";
import Scribbles from "@/Components/Scribbles";

import ScholarCap from "@/Components/Icons/ScholarCap";
import Speaker from "@/Components/Icons/Speaker";
import Clock from "@/Components/Icons/Clock";
import UpArrows from "@/Components/Icons/scribbles/UpArrows";
import Rocket from "@/Components/Icons/Rocket";
import { useEffect, useState } from "react";
import hackathon from "@/assets/images/hackathon.png";
import discussion from "@/assets/images/discussion.png";
import code from "@/assets/images/code.png";
import start from "@/assets/images/start.png";
import slider1 from "@/assets/images/slider1.png";
import slider2 from "@/assets/images/slider2.png";
import slider3 from "@/assets/images/slider3.png";
import slider4 from "@/assets/images/slider4.png";
import LocatioIcon from "@/Components/Icons/LocatioIcon";
import Register from "@/Components/Register";

// speaker bg
import bg1 from "@/assets/images/speakers/bg/bg1.png";
import bg2 from "@/assets/images/speakers/bg/bg2.png";
import bg3 from "@/assets/images/speakers/bg/bg3.png";
import bg4 from "@/assets/images/speakers/bg/bg4.png";
import bg5 from "@/assets/images/speakers/bg/bg5.png";
import bg6 from "@/assets/images/speakers/bg/bg6.png";
import bg7 from "@/assets/images/speakers/bg/bg7.png";
import bg8 from "@/assets/images/speakers/bg/bg8.png";
import bg9 from "@/assets/images/speakers/bg/bg9.png";
import bg10 from "@/assets/images/speakers/bg/bg10.png";
import bg11 from "@/assets/images/speakers/bg/bg11.png";
import bg12 from "@/assets/images/speakers/bg/bg12.png";
import bg13 from "@/assets/images/speakers/bg/bg13.png";
import bg14 from "@/assets/images/speakers/bg/bg14.png";
import bg15 from "@/assets/images/speakers/bg/bg15.png";
import bg16 from "@/assets/images/speakers/bg/bg16.png";
import bg17 from "@/assets/images/speakers/bg/bg17.png";
import bg18 from "@/assets/images/speakers/bg/bg18.png";
import bg19 from "@/assets/images/speakers/bg/bg19.png";
import bg20 from "@/assets/images/speakers/bg/bg20.png";
// elemets
import Line from "@/Components/Icons/scribbles/Line";
import Arrow from "@/Components/Icons/scribbles/Arrow";
import Group3 from "@/Components/Icons/scribbles/Group3";
import Group1 from "@/Components/Icons/scribbles/Group1";
import Group2 from "@/Components/Icons/scribbles/Group";
import ArrowHead from "@/Components/Icons/scribbles/ArrowHead";
import Wave from "@/Components/Icons/scribbles/Wave";

// partners
import Aeroplane from "@/Components/Icons/Aeroplane";
import open from "@/assets/images/partners/open.png";
import malabar from "@/assets/images/partners/malabar.png";
import aroha from "@/assets/images/partners/aroha.png";
import triplei from "@/assets/images/partners/triplei.png";
import tharacart from "@/assets/images/partners/tharacart.png";
import flora from "@/assets/images/partners/flora.png";
import kdisc from "@/assets/images/partners/kdisc.png";
import id from "@/assets/images/partners/id.png";
import ksum from "@/assets/images/partners/ksum.png";
import ksidc from "@/assets/images/partners/ksidc.png";
import morfinvirsity from "@/assets/images/partners/morfinvirsity.png";
import bbholdings from "@/assets/images/partners/bbholdings.png";
import kkem from "@/assets/images/partners/kkem.png";
import genrobotics from "@/assets/images/partners/genrobotics.png";
import safari from "@/assets/images/partners/safari.png";
import zoul from "@/assets/images/partners/zoul.png";
import meeran from "@/assets/images/partners/meeran.png";
import edroots from "@/assets/images/partners/edroots.png";
import duk from "@/assets/images/partners/duk.png";
import apk from "@/assets/images/partners/apk.png";
import asap from "@/assets/images/partners/asap.png";
import xpresso from "@/assets/images/partners/xpresso.png";
import anar from "@/assets/images/partners/anar.png";
import axios from "axios";
const Countdown = dynamic(() => import("@/Components/Counter"), { ssr: false });
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
export default function Home() {
  const [scheduledTab, setScheduledTab] = useState({
    main: "Day 1",
    sub: "Main Venue",
  });
  const [schedules, setSchedules] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const slides = [
    () => (
      <div
        className="w-full bg-opacity-20 h-full flex justify-end flex-col relative"
        style={{
          background: `url(${slider1.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="custom-container z-[2] h-[75%]  flex justify-center items-center flex-col">
          <h1 className="text-[18px] lg:text-[35px] xl:text-[42px] font-medium leading-none text-white">
            Scale Your Business
          </h1>
          <h1 className="text-white text-[20px] lg:text-[60px] xl:text-[70px] font-extrabold uppercase ">
            Ideas to Bigger and Better
          </h1>
          <p className="text-sm lg:text-lg xl:text-[42px] mb-4 xl:mb-8 text-white"></p>
          <button
            type="button"
            className="bg-primary-cyan shadow-lg shadow-primary-cyan px-8 py-3 rounded-full text-white"
            onClick={() => setOpenModal(true)}
          >
            Register Now
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 z-[1]"></div>
      </div>
    ),
    () => (
      <div
        className="w-full  h-full flex justify-end items-center flex-col "
        style={{
          background: `url(${slider2.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="custom-container z-[2] h-[75%] flex justify-center items-center flex-col">
          <h1 className="text-[14px] lg:text-[35px] xl:text-[42px]font-medium leading-none text-white uppercase">
            Fostering ScaleUp Village:
          </h1>
          <h1 className="text-white text-[20px] lg:text-[60px] xl:text-[65px] font-extrabold uppercase text-center">
            India’s First D2C Industrial Park
          </h1>
          <button
            type="button"
            className="bg-primary-cyan shadow-lg shadow-primary-cyan px-8 py-3 rounded-full text-white"
            onClick={() => setOpenModal(true)}
          >
            Register Now
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 z-[1]"></div>
      </div>
    ),
    () => (
      <div
        className="w-full h-full flex justify-end items-center flex-col "
        style={{
          background: `url(${slider4.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="custom-container  z-[2] h-[75%] flex justify-center items-center flex-col">
          <h1 className="text-[18px] lg:text-[42px] font-medium leading-none text-white uppercase">
            ScaleUp 2024: India’s First
          </h1>
          <h1 className="text-white text-[20px] lg:text-[60px] xl:text-[70px] font-extrabold uppercase">
            Fusion Business Conclave
          </h1>
          <button
            type="button"
            className="bg-primary-cyan shadow-lg shadow-primary-cyan px-8 py-3 rounded-full text-white"
            onClick={() => setOpenModal(true)}
          >
            Register Now
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 z-[1]"></div>
      </div>
    ),
    () => (
      <div
        className="w-full bg-black bg-opacity-20 h-full flex justify-end items-center flex-col"
        style={{
          background: `url(${slider3.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="custom-container  h-[75%] flex justify-center items-center flex-col z-[2]">
          <h1 className="text-[18px] lg:text-[42px] font-medium leading-none text-white uppercase">
            Learn from Experts and Begin
          </h1>
          <h1 className="text-white text-[20px] lg:text-[60px] xl:text-[70px] font-extrabold uppercase">
            Your Business Journey
          </h1>

          <button
            type="button"
            className="bg-primary-cyan shadow-lg shadow-primary-cyan px-8 py-3 rounded-full text-white"
            onClick={() => setOpenModal(true)}
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
      bg: bg1.src,
      nameContainerClassName:
        "w-full  bg-primary-purple h-[100px] px-8 py-2 rounded-tr-full rounded-br-full text-white flex justify-center items-center flex-col",
    },
    {
      image: Kunjalikutty.src,
      role: "MLA Vengara",
      name: "P. K. Kunhalikutty",
      bg: bg2.src,
      nameContainerClassName:
        "w-full  bg-primary-blue h-[100px] px-8 py-2 rounded-tl-full rounded-bl-full text-white flex justify-center items-center flex-col",
    },
    {
      image: MLA.src,
      role: "MLA Perinthalmanna",
      name: "Najeeb Kanthapuram",
      bg: bg3.src,
      nameContainerClassName:
        "w-full  bg-primary-purple h-[100px] px-8 py-2 rounded-tr-full rounded-br-full text-white flex justify-center items-center flex-col",
    },
    {
      image: shreyasmv.src,
      role: "Managing Director, Mathrubhumi",
      name: "M V Sreyas Kumar",
      bg: bg4.src,
      nameContainerClassName:
        "w-full  bg-primary-cyan h-[100px] px-8 py-2 rounded-tl-full rounded-bl-full text-white flex justify-center items-center flex-col",
    },
    {
      image: ShamlalAhamad.src,
      role: "MD International Relations Malabar Gold & Diamonds",
      name: "Shamlal Ahamed MP",
      bg: bg5.src,
      nameContainerClassName:
        "w-full  bg-primary-purple h-[100px] px-8 py-2 rounded-tr-full rounded-br-full text-white flex justify-center items-center flex-col",
    },
    {
      image: AnishAchuthan.src,
      role: "Cofounder & CEO, Open Financial Technologies",
      name: "Anish Achuthan",
      bg: bg6.src,
      nameContainerClassName:
        "w-full  bg-primary-blue h-[100px] px-8 py-2 rounded-tl-full rounded-bl-full text-white flex justify-center items-center flex-col",
    },
    {
      image: deepak.src,
      role: "CEO, Triplei",
      name: "Deepak H",
      bg: bg7.src,
      nameContainerClassName:
        "w-full  bg-primary-purple h-[100px] px-8 py-2 rounded-tr-full rounded-br-full text-white flex justify-center items-center flex-col",
    },
    {
      image: nadeemsafran.src,
      role: "CEO, Thara Cart",
      name: "Nadeem Safran kongath",
      bg: bg8.src,
      nameContainerClassName:
        "w-full  bg-primary-cyan h-[100px] px-8 py-2 rounded-tl-full rounded-bl-full text-white flex justify-center items-center flex-col",
    },

    {
      image: UshaTitus.src,
      role: "Chairperson and MD, ASAP Kerala",
      name: "Dr Usha Titus",
      bg: bg9.src,
      nameContainerClassName:
        "w-full  bg-primary-purple h-[100px] px-8 py-2 rounded-tr-full rounded-br-full text-white flex justify-center items-center flex-col",
    },
    {
      image: SanthoshGeorge.src,
      role: " Founder and MD, Safari TV",
      name: "Santhosh George Kulangara",
      bg: bg10.src,
      nameContainerClassName:
        "w-full  bg-primary-blue h-[100px] px-8 py-2 rounded-tl-full rounded-bl-full text-white flex justify-center items-center flex-col",
    },

    {
      image: miandad.src,
      role: "Chairman 33 Holdings Gloabal",
      name: "V P Muhammed Miandad",
      bg: bg11.src,
      nameContainerClassName:
        "w-full  bg-primary-cyan h-[100px] px-8 py-2 rounded-tr-full rounded-br-full text-white flex justify-center items-center flex-col",
    },
    {
      image: gopinathmuthukad.src,
      role: "Indian magician & motivational speaker",
      name: "Gopinath Muthukad",
      bg: bg12.src,
      nameContainerClassName:
        "w-full  bg-primary-cyan h-[100px] px-8 py-2 rounded-tl-full rounded-bl-full text-white flex justify-center items-center flex-col",
    },
    {
      image: Musthafa.src,
      role: "CEO, iD Fresh Food India PVT. LTD.",
      name: "PC Musthafa",
      bg: bg13.src,
      nameContainerClassName:
        "w-full  bg-primary-purple h-[100px] px-8 py-2 rounded-tr-full rounded-br-full text-white flex justify-center items-center flex-col",
    },
    {
      image: Gopinath.src,
      role: "Vice Chancellor, Kerala University of Digital Sciences, Innovation and Technology",
      name: "Saji Gopinath",
      bg: bg14.src,
      nameContainerClassName:
        "w-full  bg-primary-blue h-[100px] px-8 py-2 rounded-tl-full rounded-bl-full text-white flex justify-center items-center flex-col",
    },
    {
      image: HariKishore.src,
      role: "Director, Industries and Commerce Department",
      name: "Harikishore S. IAS",
      bg: bg15.src,
      nameContainerClassName:
        "w-full  bg-primary-purple h-[100px] px-8 py-2 rounded-tr-full rounded-br-full text-white flex justify-center items-center flex-col",
    },
    {
      image: AnoopAmbika.src,
      role: "CEO, Kerala Startup Mission",
      name: "Anoop Ambika",
      bg: bg16.src,
      nameContainerClassName:
        "w-full  bg-primary-purple h-[100px] px-8 py-2 rounded-tl-full rounded-bl-full text-white flex justify-center items-center flex-col",
    },
    {
      image: MabelChacko.src,
      role: "Co-Founder & COO, Open Financial Technologies",
      name: "Mabel Chacko",
      bg: bg17.src,
      nameContainerClassName:
        "w-full  bg-primary-purple h-[100px] px-8 py-2 rounded-tr-full rounded-br-full text-white flex justify-center items-center flex-col",
    },
    {
      image: IbnuJala.src,
      role: "Founder & CEO, Morfin Versity",
      name: "Ibnu Jala",
      bg: bg18.src,
      nameContainerClassName:
        "w-full  bg-primary-blue h-[100px] px-8 py-2 rounded-tl-full rounded-bl-full text-white flex justify-center items-center flex-col",
    },
    {
      image: majeed.src,
      role: "Saif Belhasa Auomotive, Dubai, UAE",
      name: "Majeed C K",
      bg: bg19.src,
      nameContainerClassName:
        "w-full  bg-primary-purple h-[100px] px-8 py-2 rounded-tr-full rounded-br-full text-white flex justify-center items-center flex-col",
    },
    {
      image: hassan.src,
      role: "Chairman & CEO, Flora Hospitality Dubai. MD, SBK Real Estate Dubai",
      name: "Hassan V A",
      bg: bg20.src,
      nameContainerClassName:
        "w-full  bg-primary-cyan h-[100px] px-8 py-2 rounded-tl-full rounded-bl-full    text-white flex justify-center items-center flex-col",
    },
    {
      image: VimalGovind.src,
      role: "Co-Founder & CEO, Genrobotics ",
      name: "Vimal Govind MK",
      bg: bg17.src,
      nameContainerClassName:
        "w-full  bg-primary-purple h-[100px] px-8 py-2 rounded-tr-full rounded-br-full text-white flex justify-center items-center flex-col",
    },
    {
      image: NavasMeeran.src,
      role: "Chairman, Group Meeran",
      name: "Navas Meeran",
      bg: bg18.src,
      nameContainerClassName:
        "w-full  bg-primary-blue h-[100px] px-8 py-2 rounded-tl-full rounded-bl-full text-white flex justify-center items-center flex-col",
    },

    {
      image: MuhammedMusthafa.src,
      role: "Founder & CEO, Edroots International",
      name: "Muhammed Musthafa Koori",
      bg: bg19.src,
      nameContainerClassName:
        "w-full  bg-primary-purple h-[100px] px-8 py-2 rounded-tr-full rounded-br-full text-white flex justify-center items-center flex-col",
    },
    {
      image: Tanooraa.src,
      role: "Founder, Zoul and Zera",
      name: "Tanooraa Swetha Menon",
      bg: bg20.src,
      nameContainerClassName:
        "w-full  bg-primary-cyan h-[100px] px-8 py-2 rounded-tl-full rounded-bl-full    text-white flex justify-center items-center flex-col",
    },
  ];

  let scribbles = [
    {
      component: (
        <Wave
          className="absolute bottom-[13%] lg:bottom-[10%] right-[5%] z-[11] w-[100px] lg:w-[200px] opacity-50"
          fill="#00B4B8"
        />
      ),
    },
    {
      component: (
        <Wave
          className="absolute bottom-[10%] lg:bottom-[7%] right-[-1%] z-[11] w-[100px] lg:w-[200px] opacity-50"
          fill="#FFCF3F"
        />
      ),
    },
    {
      component: (
        <Group1
          className="absolute bottom-[10%] lg:bottom-[5%] left-[-1%] z-[11]  w-[100px] lg:w-[200px] opacity-50"
          fill="#FFCF3F"
        />
      ),
    },
  ];
  let scribblesSecond = [
    {
      component: (
        <Wave
          className="absolute top-[7%] lg:top-[11%] left-[-4%]  w-[100px] lg:w-[200px]"
          fill="#CB8DF7"
        />
      ),
    },
    {
      component: (
        <Wave
          className="absolute top-[5%] lg:top-[5%] left-[5%] lg:left-[2%] w-[100px] lg:w-[200px]"
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
      component: (
        <Line
          fill="#FFCF3F"
          className="absolute top-[55%] left-0 w-[90%] h-[24px]"
          preserveAspectRatio="none"
        />
      ),
    },

    {
      component: (
        <ArrowHead fill="#FFCF3F" className="absolute top-[47%] right-[3%] " />
      ),
    },
  ];
  let aboutSecondScribble = [
    {
      component: (
        <UpArrows className="absolute bottom-[0px] right-0 z-[1] opacity-30 2xl:opacity-100" />
      ),
    },
    {
      component: (
        <Group2
          className="absolute bottom-[5%] left-[2%] z-[1] opacity-30 hidden md:block 2xl:opacity-100"
          height="250"
        />
      ),
    },
  ];

  let aboutCards = [
    {
      title: "Startups",
      description:
        "Accelerate your growth journey. Gain expert insights, explore global scaling opportunities, and connect with potential investors. Participate in pitch competitions to elevate your startup's visibility",
      icon: <Rocket />,
    },
    {
      title: "Local Business Owners/SMEs",
      description:
        "Unlock strategies for scaling your local business. Engage in tailored workshops, MSME-focused sessions, and network with like-minded entrepreneurs to propel your business forward.",
      icon: <Speaker />,
    },
    {
      title: "Educators/Studens",
      description:
        "Empower the next generation of entrepreneurs. Explore collaborative innovation models, engage in tech-focused learning sessions, and become a catalyst for fostering entrepreneurial spirit.",
      icon: <ScholarCap />,
    },
    {
      title: "Gulf Returnees/NREs",
      description:
        "Leverage your global expertise in Kerala's evolving business landscape. Connect with investment opportunities, share your insights, and contribute to the growth of the region.",
      icon: <Aeroplane fill="#f0f2f6" stroke="#7A0996" />,
    },
  ];

  let highLighEvents = [
    {
      title: "Students & Wantrepreneurs Track",
      card: [
        {
          image: discussion.src,
          title: "Medical Hackathon",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: code.src,
          title: "3D Printing Workshop ",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: start.src,
          title: "Arduino Workshop",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: hackathon.src,
          title: "STEM/Paper Circuits Workshop",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: hackathon.src,
          title: "Live Idea Pitching ",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: hackathon.src,
          title: "AI & Ml Workshop",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
      ],
    },
    {
      title: " Startups Track",
      card: [
        {
          image: discussion.src,
          title: "Startup Stories",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: code.src,
          title: "Let's talk about D2C  by CEO KSUM",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: hackathon.src,
          title: "Mrs & Mr Startup",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
      ],
    },
    {
      title: "Local Business/SMEs",
      card: [
        {
          image: discussion.src,
          title: "Panel Discussion: Opportunities and Resolutions for SMEs",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: code.src,
          title: "Panel Discussion : Kerala to the Globe",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: hackathon.src,
          title: "How to Sell Online",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: hackathon.src,
          title: "Session about Food Processing",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
      ],
    },
    {
      title: "NRE/Investors",
      card: [
        {
          image: discussion.src,
          title: "Investors Clinic",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: discussion.src,
          title: "Session about Company formation",
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
          title: "Perfume Making workshop",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image: hackathon.src,
          title: "Cookathon - Food Product Pitching",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
      ],
    },
  ];
  let partners = [
    open,
    malabar,
    aroha,
    triplei,
    tharacart,
    flora,
    kdisc,
    id,
    ksum,
    ksidc,
    morfinvirsity,
    bbholdings,
    kkem,
    genrobotics,
    zoul,
    meeran,
    edroots,
    duk,
    apk,
    asap,
    xpresso,
    anar,
  ];

  const scheduleTab = [
    {
      name: "Main Venue",
      icon: (name) => (
        <ScholarCap
          className={` max-h-[50px] absolute right-0 top-[-5px] ${
            scheduledTab.sub === name ? "fill-primary-cyan" : "fill-gray-400"
          }`}
        />
      ),
    },
    {
      name: "Hall 1",
      icon: (name) => (
        <Rocket
          className={` max-h-[50px] absolute right-0 top-[-5px] ${
            scheduledTab.sub === name ? "fill-primary-cyan" : "fill-gray-400"
          }`}
        />
      ),
    },
    {
      name: "Hall 2",
      icon: (name) => (
        <Speaker
          className={` max-h-[50px] absolute right-0 top-[-5px] ${
            scheduledTab.sub === name ? "fill-primary-cyan" : "fill-gray-400"
          }`}
        />
      ),
    },
    {
      name: "Hall 3",
      icon: (name) => (
        <Clock
          className={` max-h-[50px] absolute right-0 top-[-5px] ${
            scheduledTab.sub === name ? "fill-primary-cyan" : "fill-gray-400"
          }`}
        />
      ),
    },
    {
      name: "Hall 4",
      icon: (name) => (
        <Clock
          className={` max-h-[50px] absolute right-0 top-[-5px] ${
            scheduledTab.sub === name ? "fill-primary-cyan" : "fill-gray-400"
          }`}
        />
      ),
    },
  ];
  const targetDate = new Date("2024-02-02T00:00:00");

  const changeTab = (level, tab) => {
    setScheduledTab({ ...scheduledTab, [level]: tab });
  };

  useEffect(() => {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbwHkVYoLAzGEizR-dCmebwwQr0jVBs6doLzTg5OjaSUI3WqBc5zlsJDABWmY_b6Xo8X/exec"
      )
      .then((response) => {
        setSchedules(response.data);
      });
  }, []);

  return (
    <div className={exo2.className}>
      {openModal && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-screen justify-center z-[100] bg-black bg-opacity-50  overflow-hidden"
            onClick={() => setOpenModal(false)}
          ></div>
          <Register setShow={setOpenModal} />
        </>
      )}

      <div
        className={`${Styles["main-container"]} relative overflow-hidden main-section`}
      >
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
            <div className="col-span-2 my-auto items-center mb-4 lg:mb-0">
              <div className="grid grid-cols-12 p-1">
                <div className=" col-span-6 bg-primary-purple h-[120px] mr-3 rounded-md flex flex-col items-center justify-center">
                  <h1 className="text-[30px] lg:text-[50px] font-extrabold text-primary-yellow leading-none">
                    5000 +
                  </h1>

                  <p className="text-white text-[16px] lg:text-[20px] font-normal">
                    Total Attendees
                  </p>
                </div>
                <div className=" col-span-6 rounded-md bg-primary-yellow flex flex-col items-center justify-center  ">
                  <h1 className="text-primary-blue text-[30px] lg:text-[50px]  font-extrabold">
                    300 +
                  </h1>
                  <p className="text-primary-blue text-center text-[16px] lg:text-[20px] font-normal">
                    Local Business Heroes
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 p-2">
                <div className="flex items-center justify-center flex-col md:flex-row gap-2 col-span-8 bg-primary-cyan h-[120px] mr-3 rounded-md">
                  <h1 className="text-primary-yellow text-[30px] lg:text-[50px] font-extrabold">
                    150 +
                  </h1>
                  <p className="text-white text-[16px] lg:text-[18px] font-normal">
                    Participating <br /> Educational Institutions
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center col-span-4 bg-primary-purple rounded-md">
                  <h1 className="text-white text-[30px] lg:text-[50px] font-extrabold leading-none">
                    20 +
                  </h1>
                  <p className="text-primary-cyan text-[16px] lg:text-[20px] font-normal">
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
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-12">
            <div className="relative">
              <div className="text-[30px] lg:text-[45px] text-primary-purple flex justify-center items-center">
                <div className="bg-primary-purple px-5 font-bold rounded-md mr-4">
                  <span className="text-white">2,</span>
                  <span className="text-primary-yellow">3</span>
                </div>
                <h1 className=" font-semibold flex">February, 2024</h1>
              </div>
              <Arrow
                fill="#FFCF3F"
                className=" w-full h-[50px] hidden lg:block"
                preserveAspectRatio="none"
              />
              <div className="text-[20px] lg:text-[35px] text-primary-purple flex justify-center items-center mt-3">
                <LocatioIcon fill="#803e97" className="w-[25px] md:w-[40px]" />
                <Link
                  href="/"
                  className=" font-semibold underline text-center w-[75%] ml-4 md:ml-0"
                >
                  Shifa Convention Center Perinthalmanna
                </Link>
              </div>
            </div>
            <div className="z-[10] relative flex justify-center items-center flex-col mt-12 xl:mt-0">
              <h1 className="text-black font-bold text-[16px] md:text-[24px] mb-[20px] xl:mb-0">
                Gear up for the ultimate business festival
              </h1>
              <Countdown targetDate={targetDate} />
            </div>
          </div>
        </div>
      </div>
      {/* /COUNTER  */}

      <div className="py-[100px] relative overflow-hidden">
        <div className="custom-container relative">
          <div className="py-[100px]">
            <h1 className="title purple-before text-[36px]">ScaleUp who</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 ">
              {aboutCards.map((card, index) => (
                <div className={`${Styles["about-card"]} `} key={index}>
                  {card.icon}
                  <div className="py-4 h-full">
                    <h1 className={Styles["card-heading"]}>{card.title}</h1>
                    <p className="mb-4 ">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Scribbles scribbles={aboutScribble} />
      </div>
      <div
        className={`${Styles["scaleup-container"]} py-[100px]  relative  bg-primary-purple`}
      >
        <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-x-8 ">
          <div className="z-[2]">
            <h1 className="title  text-[36px]" style={{ color: "white" }}>
              SCALEUP CONCLAVE 2024
            </h1>
            <p className="text-white mb-5">
              It is the first edition of an annual celebratory platform that
              fuses you with entrepreneurs, investors, professionals, and
              business enthusiasts for a comprehensive two-day event. It
              promotes inspiration, knowledge exchange, and networking
              opportunities.
            </p>
            <p className="text-white mb-4">
              Bringing together innovation, expertise, and entrepreneurial
              ethos, this conclave aims to propel Kerala&apos;s startup
              ecosystem to unprecedented heights.
            </p>
          </div>
          <div className="z-[2]">
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
        <div className=" grid grid-cols-1 lg:grid-cols-4 ">
          {speakers.map((speaker, index) => (
            <div
              className={`relative w-full ${Styles["speaker"]} h-[400px]`}
              key={index}
              style={{
                background: `url(${speaker.bg})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Image
                width={350}
                height={5}
                src={speaker.image}
                className="w-full"
                alt="speaker"
              />
              <div className="absolute bottom-0 left-0 w-full ">
                <div className={speaker.nameContainerClassName}>
                  <h1 className=" font-bold text-2xl text-center">
                    {speaker.name}
                  </h1>
                  <p className=" text-sm text-center">{speaker.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-[100px] custom-container flex justify-center items-center flex-col">
        <hi className="title wave-before uppercase text-[36px] ">
          Highlighted Programs
        </hi>
        {highLighEvents.map((event, key) => (
          <div className="py-[50px] custom-container" key={key}>
            <>
              <h1 className={` title wave-before text-[25px] lg:text-[36px]`}>
                {event.title}
              </h1>
              <div className="grid grid-cols-12 gap-x-6 mt-[20px]">
                {event.card.map((card, key) => (
                  <div
                    className="bg-white border shadow-lg rounded-xl p-4 col-span-12 md:col-span-6 lg:col-span-4 mb-5"
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
                      {/* <button
                        type="button"
                        className="rounded-full uppercase bg-primary-purple text-white w-1/2 py-2 mt-4"
                      >
                        JOIN NOW
                      </button> */}
                      <Link
                        href=""
                        className="rounded-full capitalize hover:bg-primary-purple hover:text-white text-primary-purple w-1/2 py-2 mt-4 text-center font-semibold"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          </div>
        ))}
      </div>

      <div className="py-[100px] custom-container">
        <h1 className="text-[36px] title uppercase">Schedule</h1>
        <div className="custom-container flex gap-x-6 justify-center items-center  pb-6 overflow-auto">
          <div
            role="button"
            onClick={() => changeTab("main", "Day 1")}
            className="bg-gray-200 h-[50px] w-[250px] relative overflow-hidden"
          >
            <h1
              className={`font-semibold text-[15px] lg:text-[20px] p-3 ${
                scheduledTab.main == "Day 1" ? "" : "text-gray-400"
              } `}
            >
              Day 1
            </h1>
            <h1
              className={`absolute right-0 bottom-0 text-[30px] lg:text-[45px] font-semibold
             max-h-[50px] overflow-hidden ${
               scheduledTab.main === "Day 1"
                 ? "text-primary-cyan"
                 : "text-gray-400"
             }`}
            >
              2 Feb
            </h1>
          </div>
          <div
            role="button"
            onClick={() => changeTab("main", "Day 2")}
            className="bg-gray-200 h-[50px] w-[250px] relative overflow-hidden"
          >
            <h1
              className={`font-semibold text-[15px] lg:text-[20px] p-3 ${
                scheduledTab.main == "Day 2" ? "" : "text-gray-400"
              } `}
            >
              Day 2
            </h1>
            <h1
              className={`absolute right-0 bottom-0 text-[30px] lg:text-[45px] font-semibold
              max-h-[50px] overflow-hidden ${
                scheduledTab.main === "Day 2"
                  ? "text-primary-cyan"
                  : "text-gray-400"
              }`}
            >
              3 Feb
            </h1>
          </div>
        </div>
        <div className="flex overflow-auto gap-x-6">
          {scheduleTab.map((tab, index) => (
            <div
              role="button"
              onClick={() => changeTab("sub", tab.name)}
              key={index}
              className=" py-4 px-5 bg-gray-200  w-full min-w-[200px] flex items-center justify-between  overflow-hidden relative"
            >
              <h1
                className={`font-semibold text-[20px] ${
                  scheduledTab.sub !== tab.name && "text-gray-400"
                }`}
              >
                {tab.name}
              </h1>
              {tab.icon(tab.name)}
            </div>
          ))}
        </div>

        <div className="container mx-auto">
          <div className=" bg-primary-cyan mt-[50px]">
            <div className="flex px-4 items-center ">
              <Calendar width="20" fill="white" />
              <h1 className="text-white ml-3">Main Events</h1>
            </div>
          </div>
          <div class="w-full overflow-auto">
            <div class="bg-white shadow-md rounded ">
              <div class="flex flex-col">
                {Object.keys(schedules).length > 0 &&
                  schedules[scheduledTab.main][scheduledTab.sub].map(
                    (schedule, index) => {
                      return (
                        <div
                          class="flex flex-row border-b border-gray-200"
                          key={index}
                        >
                          {schedule.map((data, dataIndex) => (
                            <div
                              class="w-full md:w-1/4 py-3 px-6 text-left"
                              key={dataIndex}
                            >
                              {dataIndex === 0 ? (
                                <img
                                  src={data}
                                  width={100}
                                  height={90}
                                  alt=""
                                />
                              ) : (
                                <>
                                  {typeof data === "string" &&
                                  data.split(",").length > 0 ? (
                                    <>
                                      <h1 className="text-[15px] font-semibold whitespace-nowrap">
                                        {data.split(",")[0]}
                                      </h1>
                                      <p className="text-[14px] font-semibold whitespace-nowrap">
                                        {data.split(",")[1]}
                                      </p>
                                      <p className="text-[10px] font-normal text-gray-500 whitespace-nowrap">
                                        {data.split(",")[2]}
                                      </p>
                                    </>
                                  ) : (
                                    <h1 className="text-[15px] font-semibold whitespace-nowrap">
                                      {data}
                                    </h1>
                                  )}
                                </>
                              )}
                            </div>
                          ))}
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
                      );
                    }
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[100px] custom-container">
        <h1 className="title wave-before uppercase text-[36px]">
          Our partners
        </h1>

        <div className="grid grid-cols-2 gap-7 lg:grid-cols-5">
          {partners.map((partner, index) => (
            <div
              className="h-full flex justify-center items-center"
              key={index}
            >
              <Image
                src={partner.src}
                className={`${
                  index === 7 || index === 21
                    ? "w-[75px]"
                    : index === 16
                    ? "w-[200px]"
                    : "w-[150px]"
                } h-auto`}
                width="300"
                height="200"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
