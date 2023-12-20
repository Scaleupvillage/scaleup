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
          <h1 className="text-[#f50136] text-[24px] lg:text-[90px] font-extrabold ">
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
        <div className="px-4 md:px-0 custom-container flex justify-center items-center flex-col">
          <h1 className="text-[14px] lg:text-[42px] font-medium leading-none text-white uppercase">
            Join the annual conclave that is
          </h1>
          <h1 className="text-[#f50136] text-[21px] lg:text-[60px] font-extrabold uppercase text-center">
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
        <div className="custom-container  flex justify-center items-center flex-col">
          <h1 className="text-[18px] lg:text-[42px] font-medium leading-none text-white uppercase">
            Witness the convergence of
          </h1>
          <h1 className="text-[#f50136] text-[24px] lg:text-[90px] font-extrabold uppercase">
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
      role: "Minister for Industries, Law and Coir in the Government of Kerala",
      name: "P Rajeev",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "MLA Vengara",
      name: "P. K. Kunhalikutty",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "MLA Perinthalmanna",
      name: "Najeeb Kanthapuram",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "Cofounder & CEO, Open Financial Technologies",
      name: "Anish Achuthan",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "MD International Relations Malabar Gold & Diamonds",
      name: "Shamlal Ahamed MP",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
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
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "Founder & CEO, Morfin Versity",
      name: "Ibnu Jala",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "Co-Founder & CEO, Genrobotics ",
      name: "Vimal Govind MK",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "Co-Founder & COO, Open Financial Technologies",
      name: "Mabel Chacko",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "Founder & CEO, Edroots International",
      name: "Muhammed Musthafa Koori",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
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
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "General Manager, Kerala Knowledge Economy Mission",
      name: "Riyas PM",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "CEO, iD Fresh Food India PVT. LTD.",
      name: "PC Musthafa",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "Santhosh George Kulangara",
      name: "Founder and MD, Safari TV",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "Director, Industries and Commerce Department",
      name: "Harikishore S. IAS",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "CEO, Kerala Startup Mission",
      name: "Anoop Ambika",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "Vice Chancellor, Kerala University of Digital Sciences, Innovation and Technology",
      name: "Saji Gopinath",
    },
    {
      image:
        "https://preview.colorlib.com/theme/evento/assets/img/speakers/s1.png.webp",
      role: "Chairman, Group Meeran",
      name: "Navas Meeran",
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

        <div className="custom-container h-full py-[70px] flex justify-center items-center">
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
        <div className="grid grid-cols-2 gap-x-7">
          <div>
            <h1 className="title text-[36px]">ABOUT THE EVENT</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing eli. Integer
              iaculis in lacus a sollicitudin. Ut hendrerit hendrerit nisl a
              accumsan. Pellentesque convallis consectetur tortor id placerat.
              Curabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at
              volutpat ligula euismod. In rhoncus massa nec sollicitudin. Ut
              hendrerit hendrerit nisl a accumsan. Pellentesque convallis
              consectetur tortor id placerat. Curabitur a pulvinar nunc.
              Maecenas laoreet finibus lectus, at volutpat ligula euismod quis.
              Maecenas ornare, ex in malesuada tempus.
            </p>
          </div>
          <div>
            <h1 className="title text-[36px]">ABOUT THE EVENT</h1>
            <p className="description">
              The excitement doesn&apos;t end with ScaleUp Conclave, it marks
              the beginning of a continuous journey towards growth and
              innovation. As we celebrate the success of each annual conclave,
              our focus extends seamlessly to the transformative hub, ScaleUp
              Village. ScaleUp Village is not just an industrial park but a
              dedicated space focused on Direct-to-Consumer (D2C) innovation.
              With a planned launch within six months, this hub aims to
              revolutionize the entrepreneurial landscape, providing startups
              and businesses with an environment tailored for success.
            </p>
          </div>
        </div>
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

      <div className="py-[100] grid grid-cols-1 lg:grid-cols-5">
        {speakers.map((speaker, index) => (
          <div className={`relative w-full ${Styles["speaker"]}`} key={index}>
            <Image
              width={350}
              height={450}
              src={speaker.image}
              className="w-full"
              alt="speaker"
            />
            <div className="w-full absolute bottom-0 bg-[#18181c] px-8 py-2">
              <h1 className="text-primary text-lg">{speaker.name}</h1>
              <p className="text-white text-sm">{speaker.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={`${Styles["registration-bg"]} lg:h-[50vh] py-[100px] `}>
        <div className="custom-container grid grid-cols-10 gap-x-4">
          <div className="col-span-10 mb-5">
            <h1
              className="title text-[36px] text-white"
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
              className="w-full bg-[#f50136] px-8 py-3 rounded-full text-white"
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
