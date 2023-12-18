import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Style from "./layout.module.scss";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";

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
    <>
      <div className=" p-5 justify-between items-center h-[20vh] hidden md:flex">
        <Link href="/">
          <Image
            width="160"
            height="100"
            alt="logo"
            src="https://preview.colorlib.com/theme/evento/assets/img/logo.png.webp"
          />
        </Link>

        <div>
          <ul className="w-full flex p-8">
            {navLinks.map(({ label, link }, index) => (
              <li key={index}>
                <Link
                  href={link}
                  className="p-5 hover:text-[#f50136] transition-colors ease-in-out duration-700 text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full block md:hidden bg-[#18181C]">
        <div
          className="w-full flex justify-between relative  p-5 "
          initial={false}
          custom={height}
          ref={containerRef}
        >
          <Link href="/">
            <Image
              width="100"
              height="100"
              alt="logo"
              src="https://preview.colorlib.com/theme/evento/assets/img/logo.png.webp"
            />
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
                  className="p-5 block hover:text-[#f50136] transition-colors ease-in-out duration-700 text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
