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
      const floatingElement = document.querySelector(".reg-now-btn");
      const header = document.querySelector(".main-section");
      const footer = document.querySelector(".footer");

      const isScrolledPastHeader = () => {
        const currentScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
        return currentScrollPosition > header.clientHeight;
      };

      const isScrolledBeforeFooter = () => {
        const currentScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
        return (
          currentScrollPosition + window.innerHeight <
          document.body.offsetHeight - footer.clientHeight
        );
      };

      const shouldDisplayButton = () => {
        return isScrolledPastHeader() && isScrolledBeforeFooter();
      };
      if (shouldDisplayButton()) {
        floatingElement.style.display = "block";
      } else {
        floatingElement.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    var userFeed = new Instafeed({
      get: "user",
      target: "instafeed-container",
      resolution: "low_resolution",
      accessToken:
        "IGQWRQejdjc2NfM0ZAUWmI0NnQycXJxWDc0ZA0lRbjl5UGZAtay01aWswS1FDMDBzdkJ1RUVsNF9EZA0VLXzAzVkxfX2pBcU1QZAFZANMFMyd2NhQ1RnMnR1bkNueFhFZA3lkTVJhdDdudmltUlBCaXZAFUV91WVpRbk1zZAzAZD",
    });
    userFeed.run();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#0B031B]  footer  ">
      <div className="custom-container overflow-hidden">
        <div className="grid lg:grid-cols-3 grid-cols-1 relative  pt-[50px] pb-[100px] ">
          <div className=" flex  justify-between items-center ">
            <div className="w-full  mb-8 ">
              <h1 className="text-white text-[36px] font-semibold mb-4">
                SCALEUP CONCLAVE 2024
              </h1>
              <p className="text-[#838383] mb-4">
                It is the first edition of an annual celebratory platform that
                fuses you with entrepreneurs, investors, professionals, and
                business enthusiasts for a comprehensive two-day event. It
                promotes inspiration, knowledge exchange, and networking
                opportunities.
              </p>
              <ul className={`${Styles["footer-link"]} gap-x-4`}>
                <Link
                  href="https://www.instagram.com/scaleup2024/"
                  target="_blank"
                >
                  <Instagram width="30" fill="white" stroke="white" />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61554188141132"
                  target="_blank"
                >
                  <Facebook fill="white" stroke="white" width="30" />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCoqK1Qib6qavzM1kAhhFptg"
                  target="_blank"
                >
                  <Youtube
                    fill="white"
                    stroke="white"
                    inner="#003B6D"
                    width="30"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/99166593/admin/feed/posts/"
                  target="_blank"
                >
                  <Linkedin width="30" fill="white" stroke="white" />
                </Link>
              </ul>
            </div>
            <UpArrows className="absolute bottom-[-50px] right-0 z-0 opacity-75" />
          </div>

          <div className="text-white text-[36px] font-semibold mb-4  mx-auto ">
            {/* Insta Feed */}
          </div>

          <div className="flex  flex-col  justify-start mx-auto ">
            <div className="text-white text-[36px] font-semibold   ">
              Contact
            </div>
            <div className="text-white text-[18px] font-semibold mb-4 pt-[10px] ">
              Event Venue: Shifa Convention Center
            </div>
            <div className="mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.808196084451!2d76.24360727472761!3d10.977845489183434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cda1960f1e95%3A0x971882d6dc32948e!2sShifa%20Convention%20Center!5e0!3m2!1sen!2sin!4v1704129597752!5m2!1sen!2sin"
                width="250"
                height="150"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-white">
              <a href="mailto:info@scaleupconclave.com">
                info@scaleupconclave.com
              </a>
            </div>
            <div className="text-white  mb-3">
              <a href="tel:+919048170077"> +91 9048170077</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black w-full ">
        <div className="custom-container flex flex-col lg:flex-row justify-between items-center py-4">
          <p className="text-[#838383] mb-3 lg:mb-0">Copyright ©2024 All rights reserved </p>
          <div>
            <ul className="flex gap-x-4 text-[#838383] text-[13px] whitespace-nowrap">
              <li>
                <Link href="/" className="uppercase">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#speakers" className="uppercase">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="uppercase">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#media_kit" className="uppercase">
                  Media Kit
                </Link>
              </li>
              <li>
                <Link href="#contact" className="uppercase">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="instafeed-container"></div>
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
        className="reg-now-btn  fixed bottom-[5%] right-[2%]  z-[90] bg-primary-cyan  px-5 py-3 rounded-full text-white shadow-lg shadow-primary-cyan hidden"
        onClick={handleClick}
      >
        Register
      </button>
    </div>
  );
};

export default Footer;
