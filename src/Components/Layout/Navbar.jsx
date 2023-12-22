import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Style from "./layout.module.scss";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";
import logo from "@/assets/images/logo-white-yellow.png";
import Instagram from "../Icons/instagramColor.png";
import Facebook from "../Icons/facebookcolor.png";
import Youtube from "../Icons/download (1).png";
import LinkedIn from "../Icons/download.png";
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
      link: "/speakers",
    },
    {
      label: "EVENTS",
      link: "/events",
    },
    {
      label: "NEWS",
      link: "/news",
    },
    {
      label: "CONTACT",
      link: "/contact",
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
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <div className="absolute w-full z-10">
      <div className="  bg-white  flex justify-between  px-[70px] items-center py-3 ">
        <div className="flex  gap-6 items-center">
          <p className="flex justify-start">info@scaleupconclave.com</p>
          <p>|</p>
          <p className="text-[15px]">9048170077</p>
        </div>
        <div className="flex gap-x-6">
          <Image src={Instagram} className="w-[20px] h-[20px]" />
          <Image src={Facebook} className="w-[20px] h-[20px]" />
          <Image src={Youtube} className="w-[20px] h-[20px]" />
          <Image src={LinkedIn} className="w-[20px] h-[20px]" />
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
                  className="p-5 text-white hover:text-[#f50136] transition-colors ease-in-out duration-700 text-sm"
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
