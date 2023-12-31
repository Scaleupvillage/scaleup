import Image from "next/image";
import logo from "@/assets/images/logo.png";
import scribblegroup from "@/assets/images/scribblegroup.png";
import { Icon } from "@iconify/react";
import Styles from "@/Components/Layout/layout.module.scss";
import Facebook from "../Icons/Facebook";
import Behance from "../Icons/Behance";
import Pinterest from "../Icons/Youtube";
import Instagram from "../Icons/Instagram";
import Link from "next/link";
import UpArrows from "../Icons/scribbles/UpArrows";
import Register from "../Register";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Youtube from "../Icons/Youtube";
import Linkedin from "../Icons/Linkedin";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
    console.log(openModal);
  };

  useEffect(() => {
    const handleScroll = () => {
      const regBtn = document.querySelector(`.reg-now-btn`);
      const regBtnTop = document
        .querySelector(`.reg-now-btn`)
        .getBoundingClientRect().bottom;
      const footer = document.querySelector(`.footer`).getBoundingClientRect();
      console.log(footer.top);
      console.log(regBtnTop);
      console.log(window.scrollY);
      if (regBtn) {
        regBtn.classList.toggle(
          "hidden",
          window.scrollY < window.screen.height || regBtnTop > footer.top
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#0B031B]  footer ">
      <div className="relative overflow-hidden">
        <div className="pt-[50px] pb-[100px] custom-container flex flex-col lg:flex-row justify-between items-center ">
          <div className="w-full lg:w-1/4 mb-8 ">
            <h1 className="text-white text-[36px] font-semibold mb-4">
              SCALEUP CONCLAVE 2024
            </h1>
            <p className="text-[#838383] mb-4">
              IIt is the first edition of an annual celebratory platform that
              fuses you with entrepreneurs, investors, professionals, and
              business enthusiasts for a comprehensive two-day event. It
              promotes inspiration, knowledge exchange, and networking
              opportunities.
            </p>
            <ul className={`${Styles["footer-link"]} gap-x-4`}>
              <Link href="">
                <Instagram width="30" fill="white" stroke="white" />
              </Link>
              <Link href="">
                <Facebook width="30" fill="white" stroke="white" />
              </Link>
              <Link href="">
                <Youtube
                  fill="white"
                  stroke="white"
                  inner="#003B6D"
                  width="30"
                />
              </Link>
              <Link href="">
                <Linkedin width="30" fill="white" stroke="white" />
              </Link>
            </ul>
          </div>
          <UpArrows className="absolute bottom-[-25px] right-0" />
        </div>
      </div>
      <div className="bg-black w-full py-4">
        <div className="custom-container flex flex-col lg:flex-row justify-between items-center">
          <p className="text-[#838383]">Copyright ©2023 All rights reserved </p>
          <div>
            <ul className="flex gap-x-4 text-[#838383]">
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">News</Link>
              </li>
              <li>
                <Link href="/">Events</Link>
              </li>
              <li>
                <Link href="/">Speaker</Link>
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {openModal ? (
        <>
          <div
            className="fixed top-0 left-0 w-full h-screen justify-center  bg-black bg-opacity-50 z-[100] overflow-hidden"
            onClick={() => setOpenModal(false)}
          ></div>
          <Register setShow={setOpenModal} />
        </>
      ) : (
        ""
      )}

      <button
        type="button"
        className="reg-now-btn hidden fixed bottom-[5%] right-[2%]  z-[90] bg-primary-cyan  px-5 py-3 rounded-full text-white shadow-lg shadow-primary-cyan"
        onClick={handleClick}
      >
        Register
      </button>
    </div>
  );
};

export default Footer;
