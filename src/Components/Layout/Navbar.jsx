import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Style from "./layout.module.scss";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";
import logo from "@/assets/images/logo-white-yellow.png";
import Youtube from "../Icons/Youtube";
import Instagram from "../Icons/Instagram";
import Facebook from "../Icons/Facebook";
import Linkedin from "../Icons/Linkedin";
const Navbar = () => {
  const containerRef = useRef(null);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { height } = useDimensions(containerRef);
  let navLinks = [
    {
      label: "HOME",
      link: "/",
    },
    {
      label: "SPEAKER",
      link: "#speakers",
    },
    {
      label: "SCHEDULE",
      link: "#schedule",
    },
    {
      label: "MEDIA KIT",
      link: "#media_kit",
    },
    {
      label: "CONTACT  US",
      link: "#contactus",
    },
  ];

  const sidebar = {
    open: (height) => ({
      height: height,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      height: 0,
      opacity: 0,
      display: "none",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(`.info-nav`);
      if (navbar) {
        navbar.classList.toggle("fixed", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="absolute w-full z-[100]">
      <div className="  bg-white shadow-md w-full flex justify-between  px-3 lg:px-[70px] items-center py-3 info-nav">
        <div className="flex   md:gap-x-6 lg:gap-x-6 items-center text-[10px] lg:text-[16px]">
          <a
            href="mailto:info@scaleupconclave.com"
            className="flex justify-start "
          >
            info@scaleupconclave.com
          </a>
          <p>|</p>
          <a
            href="tel:info@scaleupconclave.com"
            className="lg:text-[15px] hidden md:block"
          >
           +91 9048170077
          </a>
        </div>
        <div className="flex justify-center items-center gap-x-3 lg:gap-x-4">
          <Link href="https://www.instagram.com/scaleup2024/" target="_blank">
            <Instagram fill="#003B6D" stroke="#003B6D" width="30" />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61554188141132"
            target="_blank"
          >
            <Facebook fill="#003B6D" stroke="#003B6D" width="30" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCoqK1Qib6qavzM1kAhhFptg"
            target="_blank"
          >
            <Youtube fill="#003B6D" stroke="#003B6D" inner="white" width="30" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/99166593/admin/feed/posts/"
            target="_blank"
          >
            <Linkedin fill="#003B6D" stroke="#003B6D" width="30" />
          </Link>
        </div>
      </div>
      <div className=" p-5 justify-between items-center h-[20vh] hidden md:flex custom-container">
        <Link href="/">
          <Image width="100" height="100" alt="logo" src={logo.src} />
        </Link>

        <div>
          <ul className="w-full flex p-8">
            {navLinks.map(({ label, link }, index) => (
              <li key={index}>
                <Link
                  href={link}
                  className="whitespace-nowrap p-5 text-white hover:text-[#f50136] transition-colors ease-in-out duration-700 text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full block md:hidden bg-[#18181C] absolute z-20">
        <div
          className="w-full flex justify-between relative  p-5 "
          initial={false}
          custom={height}
          ref={containerRef}
        >
          <Link href="/">
            <Image width="90" height="100" alt="logo" src={logo.src} />
          </Link>
          <div className="px-3 flex justify-center items-center">
            <button type="button" onClick={toggleOpen}>
              <span className={Style["hamburger"]}></span>
            </button>
          </div>
        </div>

        <motion.div animate={isOpen ? "open" : "closed"} variants={sidebar}>
          <ul className="w-full flex flex-col p-8">
            {navLinks.map(({ label, link }, index) => (
              <li key={index}>
                <Link
                  href={link}
                  className="p-5 block text-white hover:text-[#f50136] transition-colors ease-in-out duration-700 text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
