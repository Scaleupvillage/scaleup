import Image from "next/image";
import logo from "@/assets/images/logo.png";
import scribblegroup from "@/assets/images/scribblegroup.png";
import { Icon } from "@iconify/react";
import Styles from "@/Components/Layout/layout.module.scss";
const Footer = () => {
  return (
    <div className="bg-[#ffffff] pt-[50px] pb-[100px]  ">
      <div className="custom-container flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/4 mb-8 ">
          <Image
            src={logo.src}
            width="100"
            height="100"
            alt="logo"
            className="mb-4"
          />
          <p className="text-[#838383] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            massa nec gravida tempus. Integer iaculis in aazzzCurabitur a
            pulvinar nunc. Maecenas laoreet finibus lectus, at volutpat ligula
            euismod.
          </p>
          <ul className={`${Styles["footer-link"]} gap-x-4`}>
            <li>
              <a className={Styles["social-link"]}>
                <Icon icon="mdi:pinterest" color="#003b6d" width="25" />
              </a>
            </li>
            <li>
              <a className={Styles["social-link"]}>
                <Icon icon="eva:facebook-fill" color="#ffcf3f" width="25" />
              </a>
            </li>
            <li>
              <a className={Styles["social-link"]}>
                <Icon icon="mdi:twitter" color="#803e97" width="25" />
              </a>
            </li>
            <li>
              <a className={Styles["social-link"]}>
                <Icon icon="ri:instagram-fill" color="#00b7bb" width="25" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 h-full">
          <Image
            src={scribblegroup.src}
            alt="scribble"
            width="100"
            height="150"
            className="w-full"
          />
          {/* <h1 className="title text-[18px]" style={{ color: "white" }}>
            SUBSCRIBE TO OUR NEWSLETTER
          </h1>
          <div>
            <input
              type="text"
              name="subscribe"
              className={"input"}
              placeholder="E-mail here "
            />
            <button
              type="button"
              className="w-full bg-[#f50136] px-8 py-3 rounded-full uppercase text-white font-medium "
            >
              SUBSCRIBE
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
