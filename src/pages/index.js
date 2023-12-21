import { Exo_2 } from "next/font/google";
import Styles from "@/pages/index.module.scss";
import Navbar from "@/Components/Layout/Navbar";
const exo2 = Exo_2({ subsets: ["latin"], adjustFontFallback: false });

import { EffectFade, Autoplay } from "swiper/modules";
import Slider from "@/Components/Slider";
import { Icon } from "@iconify/react";
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
import UserIcon from "@/Components/Icons/UserIcon";
import Calendar from "@/Components/Icons/Calendar";
import LocatioIcon from "@/Components/Icons/LocatioIcon";
import LabelIcon from "@/Components/Icons/LabelIcon";
import Wave from "@/Components/Icons/scribbles/Wave";
import Scribbles from "@/Components/Scribbles";
import Group1 from "@/Components/Icons/scribbles/Group1";
import Group2 from "@/Components/Icons/scribbles/Group";
import Line from "@/Components/Icons/scribbles/Line";
import Arrow from "@/Components/Icons/scribbles/Arrow";
import { motion } from "framer-motion";
import ArrowHead from "@/Components/Icons/scribbles/ArrowHead";
import Group3 from "@/Components/Icons/scribbles/Group3";
import ScholarCap from "@/Components/Icons/ScholarCap";
import Rocket from "@/Components/Icons/Rocket";
import Speaker from "@/Components/Icons/Speaker";
import Clock from "@/Components/Icons/Clock";
import UpArrows from "@/Components/Icons/scribbles/UpArrows";
const Countdown = dynamic(() => import("@/Components/Counter"), { ssr: false });
export default function Home() {
  const slides = [
    () => (
      <div className="w-full bg-black bg-opacity-20 h-full flex justify-center items-center flex-col">
        <div className="custom-container flex justify-center items-center flex-col">
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
            BUY TICKETS NOW
          </button>
        </div>
      </div>
    ),
    () => (
      <div className="w-full bg-black bg-opacity-20 h-full flex justify-start items-center ">
        <div className="px-4 md:px-0 custom-container flex justify-center items-center flex-col">
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
            BUY TICKETS NOW
          </button>
        </div>
      </div>
    ),
    () => (
      <div className="w-full bg-black bg-opacity-20 h-full flex justify-start items-center ">
        <div className="custom-container  flex justify-center items-center flex-col">
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
            BUY TICKETS NOW
          </button>
        </div>
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
      title: "Investors",
      description:
        "Stay ahead of the curve with hands-on workshops on cutting-edge technologies and emerging trends.",
      icon: <Clock />,
    },
  ];
  let aboutSecondScribble = [
    {
      component: <UpArrows className="absolute bottom-[-25px] right-0" />,
    },
  ];
  let highLighEvents = [
    {
      title: "Events For Students",
      card: [
        {
          image:
            "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
          title: "Panel Discussion : Kerala to the Globe",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image:
            "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
          title: "Startup Stories",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image:
            "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
          title: "Live Idea Pitching",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image:
            "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
          title: "Medical Hackathon",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
      ],
    },
    {
      title: "Events For Startup",
      card: [
        {
          image:
            "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
          title: "Let's talk about Startup by CEO KSUM",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image:
            "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
          title: "Panel Discussion : Kerala to the Globe",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image:
            "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
          title: " Mrs & Mr Startup",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
      ],
    },
    {
      title: "Events For Local Business Owners/SMEs",
      card: [
        {
          image:
            "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
          title:
            "Panel Discussion: Opportunities and Resolutions, How to Scale",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image:
            "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
          title: "Panel Discussion : Kerala to the Globe",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image:
            "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
          title: "Non Tech Learning Stations",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
      ],
    },
    {
      title: "Gulf Returnees/NREs",
      card: [
        {
          image:
            "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
          title: "Investors Clinic(How to Invest Wisely)",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image:
            "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
          title: "Panel Discussion : Kerala to the Globe",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
      ],
    },
    {
      title: "Entertainment",
      card: [
        {
          image:
            "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
          title: "Magic Planet Show",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image:
            "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
          title: "Cookathon Cooking Competition",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
        {
          image:
            "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
          title: " Culturel events/Exhibits",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia magnam debitis maxime sed. Error, odit id iusto, hic nobis mollitia incidunt deserunt, expedita suscipit exercitationem aspernatur nihil sunt consequuntur?",
        },
      ],
    },
  ];
  const targetDate = new Date("2024-01-01T00:00:00");
  return (
    <div className={exo2.className}>
      <div className={`${Styles["main-container"]} relative overflow-hidden`}>
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
        <Scribbles scribbles={scribbles} />
      </div>
      <div className="  h-[50vh] relative overflow-hidden">
        <div className="custom-container flex justify-center items-center h-full">
          <div className="bg-white w-full grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-x-12   ">
            <div className="flex justify-center items-center gap-x-4">
              <Calendar />
              <div className=" flex flex-col justify-center">
                <h1 className="text-[18px] font-medium">DATE</h1>
                <h1 className="text-[14px]">12-14 february 2018</h1>
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-4">
              <LocatioIcon />
              <div className=" flex flex-col justify-center">
                <h1 className="text-[18px] font-medium">LOCATION</h1>
                <h1 className="text-[14px]">Los Angeles, CA. </h1>
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-4">
              <UserIcon />
              <div className=" flex flex-col justify-center">
                <h1 className="text-[18px] font-medium">SPEAKERS</h1>
                <h1 className="text-[14px]">Natalie James + guests</h1>
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-4">
              <LabelIcon />
              <div className=" flex flex-col justify-center">
                <h1 className="text-[18px] font-medium">TICKETS</h1>
                <h1 className="text-[14px]">$65 early bird</h1>
              </div>
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
          <div>
            <h1 className="title purple-before text-[36px]">
              ScaleUp Conclave 2024
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-7">
              <p className="description">
                Is the first edition of an annual celebratory platform that
                fuses you with entrepreneurs, investors, professionals, and
                business enthusiasts for a comprehensive two-day event. It
                promotes inspiration, knowledge exchange, and networking
                opportunities.
              </p>
              <p className="description">
                Bringing together innovation, expertise, and entrepreneurial
                ethos, this conclave aims to propel Kerala's startup ecosystem
                to unprecedented heights.
              </p>
            </div>
          </div>
          <div className="py-[100px]">
            <h1 className="title purple-before text-[36px]">
              ScaleUp for who?
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 ">
              {aboutCards.map((card, index) => (
                <div className={Styles["about-card"]} key={index}>
                  {card.icon}
                  <div className="py-4 h-full">
                    <h1 className={Styles["card-heading"]}>{card.title}</h1>
                    <p className="mb-4 line-clamp-3">{card.description}</p>
                    <a href="" className={Styles["card-link"]}>
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Scribbles scribbles={aboutScribble} />
      </div>
      <div className="py-[100px] h-[75vh] relative overflow-hidden bg-primary-purple">
        <div className="custom-container grid grid-cols-12">
          <div className="col-span-6">
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
      <div className="py-[100]">
        <div className="custom-container">
          <h1 className="title text-[36px] cyan-before">OUR SPEAKERS</h1>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-5">
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

      {/* HILIGHT EVENTS */}
      {highLighEvents.map((event, index) => (
        <div key={index} className="custom-container py-[100px]">
          <h1 className="title purple-before text-[36px]">{event.title}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 ">
            {event.card.map((card, key) => (
              <div
                key={index}
                className="bg-white max-w-[18rem] shadow-lg border border-text-muted border-opacity-40 rounded-lg overflow-hidden "
              >
                <Image
                  src={card.image}
                  alt=""
                  width="300"
                  height="100"
                  className="w-full"
                />
                <div className="p-4 h-1/2">
                  <div className="h-[40%]">
                    <h1 className="title">{card.title}</h1>
                  </div>
                  <div className="h-[60%]">
                    <p className="line-clamp-2 text-text-muted mb-4">
                      {card.description}
                    </p>
                    <button
                      type="button"
                      class="bg-[#25D366] text-white py-3 px-4 rounded-full  w-full"
                    >
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* HILIGHT EVENTS */}

      <div className={`${Styles["registration-bg"]} lg:h-[50vh] py-[100px] `}>
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
              <labe className="label text-white">Full Name</labe>
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
      </div>
      <Footer />
    </div>
  );
}
