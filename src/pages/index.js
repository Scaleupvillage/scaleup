/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Styles from "@/pages/index.module.scss";

import Link from "next/link";
import axios from "axios";

import { EffectFade, Autoplay } from "swiper/modules";
import dynamic from "next/dynamic";
import Image from "next/image";
import Slider from "@/Components/Slider";
import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";
import Scribbles from "@/Components/Scribbles";

// icons
import Calendar from "@/Components/Icons/Calendar";
import ScholarCap from "@/Components/Icons/ScholarCap";
import Speaker from "@/Components/Icons/Speaker";
import Clock from "@/Components/Icons/Clock";
import Rocket from "@/Components/Icons/Rocket";
import Aeroplane from "@/Components/Icons/Aeroplane";

// static images
import hackathon from "@/assets/images/hackathon.png";
import discussion from "@/assets/images/discussion.png";
import code from "@/assets/images/code.png";
import start from "@/assets/images/start.png";
import hilight1 from "@/assets/gif/hilight1.gif";
import hilight2 from "@/assets/gif/hilight2.gif";
import hilight3 from "@/assets/gif/hilight3.gif";
import hilight4 from "@/assets/gif/hilight4.gif";
import hilight5 from "@/assets/gif/hilight5.gif";
import hilight6 from "@/assets/gif/hilight6.gif";
import hilight7 from "@/assets/gif/hilight7.gif";
import hilight8 from "@/assets/gif/hilight8.gif";
import hilight9 from "@/assets/gif/hilight9.gif";
import hilight10 from "@/assets/gif/hilight10.gif";
import slider1 from "@/assets/images/slider1.png";
import slider2 from "@/assets/images/slider2.png";
import slider3 from "@/assets/images/slider3.png";
import slider4 from "@/assets/images/slider4.png";
import LocatioIcon from "@/Components/Icons/LocatioIcon";
import Register from "@/Components/Register";

import { speakers } from "@/constants/speakers";
import { partners } from "@/constants/partners";
import {
  aboutSecondScribble,
  aboutScribble,
  scribblesSecond,
  scribbles,
  hilightScribble,
} from "@/constants/scribbles";
import Arrow from "@/Components/Icons/scribbles/Arrow";
import Nextpage from "@/Components/Icons/Nextpage";
import Head from "next/head";
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
          <h1 className="text-[16px] lg:text-[35px] xl:text-[42px] font-medium leading-none text-white mb-3">
            Scale Your Business
          </h1>
          <h1 className="text-white text-[18px] lg:text-[60px] xl:text-[70px] font-extrabold uppercase mb-2">
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
          <h1 className="text-[14px] lg:text-[35px] xl:text-[42px]font-medium leading-none text-white uppercase mb-3">
            Fostering ScaleUp Village:
          </h1>
          <h1 className="text-white text-[20px] lg:text-[60px] xl:text-[65px] font-extrabold uppercase text-center mb-2">
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
          <h1 className="text-[18px] lg:text-[42px] font-medium leading-none text-white uppercase mb-3">
            ScaleUp 2024: India’s First
          </h1>
          <h1 className="text-white text-[18px] lg:text-[60px] xl:text-[70px] font-extrabold uppercase mb-2">
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
          <h1 className="text-[18px] lg:text-[42px] font-medium leading-none text-white uppercase mb-3">
            Learn from Experts and Begin
          </h1>
          <h1 className="text-white text-[20px] lg:text-[60px] xl:text-[70px] font-extrabold uppercase mb-2">
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
      title: "Educators/Students",
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
  let highlightedPrograms = [
    [
      {
        background: hilight1.src,
        title: "Panel Discussions",
        desc: " Engage in dynamic conversations led by industry thought leaders, exploring cutting-edge topics and sharing diverse perspectives to foster insightful discussions",
        button: {
          label: "",
          link: "/Panel Discussions",
        },
      },
      {
        background: hilight2.src,
        title: "Talks by Industry Experts",
        desc: " Immerse yourself in enlightening sessions delivered by seasoned professionals, gaining deep insights into the latest trends, innovations, and best practices in the industry",
        link: "",
        button: {
          label: "",
          link: "/Talks by Industry Experts",
        },
      },
      {
        background: hilight3.src,
        title: "Medical Hackathon",
        regRequired: true,
        desc: " Join forces with like-minded innovators to tackle real-world healthcare challenges, leveraging technology and creativity to develop impactful solutions",
        link: "",
        button: {
          label: "Register for the event",
          link: "https://hack.scaleupconclave.com/",
        },
      },
      {
        background: hilight4.src,
        title: "Idea Pitching Events",
        desc: " Step into the spotlight and present your groundbreaking ideas, receiving valuable feedback and the opportunity to connect with potential collaborators and investors",
        link: "/Idea Pitching Events",
        button: {
          label: "",
          link: "/Idea Pitching Events",
        },
      },
    ],
    [
      {
        background: hilight5.src,
        title: "Technical Workshops",
        desc: " Dive into hands-on technical workshops, equipping yourself with practical skills and knowledge led by experts in the field",
        link: "/Technical Workshops",
        button: {
          label: "",
          link: "/Technical Workshops",
        },
      },
      {
        background: hilight6.src,
        title: "Art & Craft Workshops",
        desc: " Unleash your creative side with engaging art and craft workshops, providing a relaxing and enjoyable break from the technical aspects of the event",
        link: "/Art & Craft Workshops",
        button: {
          label: "",
          link: "/Art & Craft Workshops",
        },
      },
    ],
    [
      {
        background: hilight7.src,
        title: "Cookathon",
        regRequired: true,
        desc: " Explore the intersection of food and innovation in this culinary challenge, where participants compete to create the next big Direct-to-Consumer (D2C) friendly food product",
        button: {
          label: "Register for the event",
          link: "/cookathon",
        },
      },
      {
        background: hilight10.src,
        title: "2 Days Business Bootcamp",
        desc: " Receive personalized guidance from experienced mentors, addressing specific queries and gaining valuable insights tailored to your individual needs",
        link: "/",
        button: {
          label: "Register for the event",
          link: "/bootcamp",
        },
      },
      {
        background: hilight8.src,
        title: "Entertainment Programs & Games",
        desc: " Enjoy a mix of entertainment and games, fostering a lively and interactive atmosphere to complement the educational aspects of the event",
        link: "/Entertainment Programs & Games",
        button: {
          label: "",
          link: "/Entertainment Programs & Games",
        },
      },
      {
        background: hilight9.src,
        title: " Project Expo & Stalls",
        desc: " Showcase your projects and innovations, network with attendees, and explore a diverse array of stalls featuring cutting-edge products and services",
        button: {
          label: "",
          link: "/Project Expo & Stalls",
        },
      },
    ],
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
  const eventDate = new Date("2024-02-02T00:00:00");

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
    <div>
      <Head>
        <title>ScaleUp Conclave 2024 - ScaleUp Village</title>
        <meta
          name="description"
          content=" India's first D2C Industrial Park at Perinthalmanna: Connecting Entrepreneurs, Investors, Students. Explore the future of Kerala's startup landscape at this first-of-its-kind business event. Network and exchange ideas with top entrepreneurs, incubators, and investors at the two-day startup conclave"
        />
        <meta
          name="keywords"
          content="Annual celebratory platform, entrepreneurs, investors, professionals, business enthusiasts, two-day event, inspiration, knowledge exchange, networking opportunities, innovation, expertise, entrepreneurial ethos, Kerala, startup ecosystem"
        />

        <meta
          property="og:title"
          content="ScaleUp Conclave 2024  - ScaleUp Village"
        />
        <meta
          property="og:description"
          content="India's first D2C Industrial Park at Perinthalmanna: Connecting Entrepreneurs, Investors, Students. "
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://www.scaleupconclave.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ScaleUp Conclave 2024  - ScaleUp Village"
        />
        <meta
          name="twitter:description"
          content="India's first D2C Industrial Park at Perinthalmanna: Connecting Entrepreneurs, Investors, Students. "
        />
        <meta
          name="facebook-domain-verification"
          content="yibegoejabtonullxwtvd6jfxm64d7"
        />
        <meta name="twitter:image" content="/favicon.ico" />
        <meta name="twitter:url" content="https://www.scaleupconclave.com/" />
      </Head>
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
          <Navbar isAbsolute={true} />

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
                <div className=" col-span-12 lg:col-span-6 bg-primary-purple h-[120px] mb-4 lg:mb-0 lg:mr-3 rounded-md flex flex-col items-center justify-center">
                  <h1 className="text-[30px] xl:text-[50px] font-extrabold text-primary-yellow leading-none">
                    5000 +
                  </h1>

                  <p className="text-white text-[16px] xl:text-[20px] font-normal">
                    Total Attendees
                  </p>
                </div>
                <div className=" col-span-12 lg:col-span-6  h-[120px] lg:h-full rounded-md bg-primary-yellow flex flex-col items-center justify-center  ">
                  <h1 className="text-primary-blue text-[30px] xl:text-[50px]  font-extrabold">
                    300 +
                  </h1>
                  <p className="text-primary-blue text-center text-[16px] xl:text-[20px] font-normal">
                    Local Business Heroes
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 p-2">
                <div className="flex items-center justify-center flex-col md:flex-row gap-2 col-span-12 lg:col-span-8 bg-primary-cyan h-[120px] mb-4 lg:mb-0 lg:mr-3 rounded-md">
                  <h1 className="text-primary-yellow text-[30px] xl:text-[50px] font-extrabold">
                    150 +
                  </h1>
                  <p className="text-white text-[14px] xl:text-[17px]  font-normal  text-center">
                    Participating <br /> Educational Institutions
                  </p>
                </div>
                <div className=" h-[120px] lg:h-full flex flex-col items-center justify-center col-span-12 lg:col-span-4 bg-primary-purple rounded-md">
                  <h1 className="text-white text-[30px] xl:text-[50px] font-extrabold leading-none">
                    20 +
                  </h1>
                  <p className="text-primary-cyan text-[16px] xl:text-[20px] font-normal">
                    Investors
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-4 col-span-2 h-[300px] w-full rounded-lg overflow-hidden">
              <ReactPlayer
                url="https://youtu.be/jXpYAYwjOvM?si=_GmVzd4o8yXJhdoR"
                height={"100%"}
                width={"100%"}
              />
            </div>
          </div>
        </div>
        <Scribbles scribbles={scribblesSecond} />
      </div>

      {/* COUNTER  */}
      <div className={`${Styles["counter-bg"]} `}>
        <div className="custom-container h-full py-[70px] flex justify-center items-center">
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-12">
            <div className="relative">
              <div className="text-[25px] md:text-[30px] lg:text-[45px] text-primary-purple flex justify-center items-center">
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
                <LocatioIcon
                  fill="#803e97"
                  className="w-[25px] md:w-[40px] mr-[20px]"
                />
                <Link
                  href="https://maps.app.goo.gl/U93qFXkLbWsadsA8A"
                  target="_blank"
                  className="font-semibold underline text-center w-[75%] ml-4 md:ml-0"
                >
                  Shifa Convention Center Perinthalmanna
                </Link>
              </div>
            </div>
            <div className="z-[10] relative flex justify-center items-center flex-col mt-12 xl:mt-0">
              <h1 className="text-black font-bold text-[16px] md:text-[24px] mb-[20px] xl:mb-0 text-center">
                Gear up for the ultimate business festival
              </h1>
              <Countdown targetDate={eventDate} />
            </div>
          </div>
        </div>
      </div>
      {/* /COUNTER  */}

      <div className="py-[100px] relative overflow-hidden">
        <div className="custom-container relative">
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
      <div className="py-[100px] " id="speaker">
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

      <div className=" py-[100px]   p-4 relative overflow-hidden">
        {highlightedPrograms.map((programs, highlightedProgramsIndex) => (
          <div className="grid grid-cols-12 " key={highlightedProgramsIndex}>
            {programs.map(
              (
                { title, desc, background, button, regRequired },
                programIndex
              ) => (
                <div
                  className={`col-span-12 lg:col-span-3 h-[250px] rounded-md shadow-lg  overflow-hidden m-3 bg-white ${
                    highlightedProgramsIndex == 1 && programIndex === 0
                      ? "order-1"
                      : programIndex === 1
                      ? "order-3"
                      : ""
                  }`}
                  key={programIndex}
                >
                  <div className="flip-card border-2 border-primary-purple rounded-[10px] overflow-hidden">
                    <div className="flip-card-inner">
                      <div className="flip-card-front z-[1]">
                        <div className="relative h-full">
                          <Image
                            src={background}
                            alt="Avatar"
                            width="300"
                            height="300"
                            className="z-[1] w-full h-full object-cover"
                          />
                          <div className="absolute z-[10] bottom-[10px] bg-primary-purple p-3 rounded-tr-full rounded-br-full text-white font-semibold uppercase">
                            {title}
                          </div>

                          {regRequired && (
                            <div className="absolute top-[5px] right-[5px] text-[12px] z-[10] bg-primary-yellow text-black rounded-full py-1 px-4">
                              *Event Registration Required
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flip-card-back bg-primary-purple flex justify-center items-center flex-col p-4 border-4 border-white rounded-[10px] z-[2]">
                        <h1 className="font-bold text-[23px] mb-4">{title}</h1>
                        <p className="text-sm">{desc}</p>
                        {button && button.label !== "" && (
                          <Link
                            target="_blank"
                            href={button.link}
                            className="flex gap-2 items-center mt-3 bg-primary-blue rounded-md px-4 py-2 hover:shadow-md"
                          >
                            <Nextpage width="18" height="18" />
                            {button.label}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
            {highlightedProgramsIndex === 1 && (
              <div className="hidden lg:block col-span-6 order-2  h-[250px] rounded-md shadow-lg  overflow-hidden m-3 bg-white">
                <div className=" flex items-center justify-center w-full h-full">
                  <h1 className="title  uppercase text-[36px] ">
                    Highlighted Programs
                  </h1>
                </div>
              </div>
            )}
          </div>
        ))}
        <Scribbles scribbles={hilightScribble} />
      </div>
      <div className="py-[100px] custom-container" id="schedule">
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
          <div className="w-full overflow-auto">
            <div className="bg-white shadow-md rounded ">
              <div className="flex flex-col">
                {/* {Object.keys(schedules).length > 0 &&
                  schedules[scheduledTab.main][scheduledTab.sub].map(
                    (schedule, index) => {
                      return (
                        <div
                          className="flex flex-row border-b border-gray-200"
                          key={index}
                        >
                          {schedule.map((data, dataIndex) => (
                            <div
                              className="w-full md:w-1/4 py-3 px-6 text-left"
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
                          <div className="w-full md:w-1/4 py-3 px-6 text-left flex justify-center items-center flex-col">
                            <div className="text-[20px] font-semibold">14</div>
                            <div>February</div>
                          </div>
                          <div className="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center flex-col">
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
                          <div className="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center">
                            <button className="rounded-2xl bg-primary-cyan text-white px-10 py-2 text-[10px]">
                              Read More
                            </button>
                          </div>
                          <div className="w-full md:w-1/4 py-3 px-6 text-center flex justify-center items-center">
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
                  )} */}

                <div className="w-full  text-center p-7  border-b border-gray-200 shadow-lg">
                  <h1 className="title">Coming Soon...</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[100px] custom-container">
        <h1 className="title wave-before uppercase text-[36px]">
          Our partners
        </h1>

        <div className="grid grid-cols-2 gap-7 lg:grid-cols-5 mt-4">
          {partners.map((partner, index) => (
            <div
              className="h-full flex justify-center items-center"
              key={index}
            >
              <Image
                src={partner.src}
                className={`${
                  index === 7 || index === 30 || index === 20
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

      <Footer hideFloatingBtn={true} />
    </div>
  );
}
