import React from "react";
import Image from "next/image";
import Close from "../Icons/close.png";
import CheckCircle from "../Icons/CheckCircle";
import Instagram from "../Icons/Instagram";
import WhatsApp from "../Icons/WhatsApp";
import InsagramColor from "../Icons/InstagramColor";


const SuccessAlert = ({ closeModal }) => {
  return (
    <div
      className="w-[95%] max-w-[650px] z-[112] rounded-lg fixed top-[50%] left-[50%] translate-x-[-50%] 
translate-y-[-50%] bg-gray-100 p-[25px]  "
    >
      <div className="flex justify-end">
        {/* <div className="text-[20px] font-semibold ">Register</div> */}
        <div className="w-[15px] h-[15px] cursor-pointer" onClick={closeModal}>
          <Image src={Close} alt="" />
        </div>
      </div>
      <div>
        <div className="flex justify-center  items-center flex-col">
          <CheckCircle width="100" />
          <h1 className="title text-[20px] text-center">
            Registration Successful for ScaleUp Conclave Event!
          </h1>
          <div>
            <p className="text-[15px] text-center ">
              You will recieve the event pass on your whatsApp number or email.
            </p>
            <p className="text-[15px] mb-4 text-center">
              Show the pass when entering the venue
            </p>
            <p className="text-[16px] text-center font-bold mb-4">
              See you at Shifa Convention Center on Feb 2-3 , 2024 !
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-2">
            <p className="flex text-[13px] lg:text-[15px] first-letter:">
              Join our &nbsp;
              <a
                href="https://chat.whatsapp.com/HxsN8aGzntmH7QCEV4NxfH"
                className="text-[15px] font-semibold underline lowercase"
              >
                <p className="flex items-center gap-1">
                  <WhatsApp width="20" height="20" /> WhatsApp Discussion Group
                </p>
              </a>
            </p>
            <p className=" flex text-[15px] ">
              Focus us on&nbsp;
              <a
                href="https://www.instagram.com/scaleupconclave/"
                className="flex text-[15px] font-semibold underline lowercase "
              >
                <p className="flex items-center gap-1">
                  <InsagramColor width="15" height="15" /> Instagram
                </p>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessAlert;
