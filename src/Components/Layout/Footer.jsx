import Image from "next/image";
import logo from "@/assets/images/logo.png";
import scribblegroup from "@/assets/images/scribblegroup.png";
import { Icon } from "@iconify/react";
import Styles from "@/Components/Layout/layout.module.scss";
import Facebook from "../Icons/Facebook";
import Behance from "../Icons/Behance";
import Pinterest from "../Icons/Pinterest";
import Instagram from "../Icons/Instagram";
import Link from "next/link";
import UpArrows from "../Icons/scribbles/UpArrows";
const Footer = () => {
  return (
    <div className="bg-[#0B031B]   ">
      <div className="relative overflow-hidden">
        <div className="pt-[50px] pb-[100px] custom-container flex flex-col lg:flex-row justify-between items-center ">
          <div className="w-full lg:w-1/4 mb-8 ">
            <h1 className="text-white text-[36px] font-semibold mb-4">
              ScaleUp
            </h1>
            <p className="text-[#838383] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              rhoncus massa nec gravida tempus. Integer iaculis in
              aazzzCurabitur a pulvinar nunc. Maecenas laoreet finibus lectus,
              at volutpat ligula euismod.
            </p>
            <ul className={`${Styles["footer-link"]} gap-x-4`}>
              <li>
                <a className={Styles["social-link"]}>
                  <Pinterest width="25" fill="#00b7bb" />
                </a>
              </li>
              <li>
                <a className={Styles["social-link"]}>
                  <Facebook width="25" fill="#00b7bb" />
                </a>
              </li>
              <li>
                <a className={Styles["social-link"]}>
                  <Behance width="25" height="25" fill="#00b7bb" />
                </a>
              </li>
              <li>
                <a className={Styles["social-link"]}>
                  <Instagram fill="#00b7bb" width="25" />
                </a>
              </li>
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
    </div>
  );
};

export default Footer;
