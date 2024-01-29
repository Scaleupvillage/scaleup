import Image from "next/image";
import React from "react";
import Close from "./Icons/close.png";
import Link from "next/link";

const RegisterFallback = ({ setShow }) => {
  const closeModal = () => {
    setShow(false);
  };
  return (
    <div>
      {" "}
      <div
        className="w-[95%] h-[90%] lg:h-auto  overflow-auto max-w-[450px] z-[110] rounded-lg fixed top-[50%] left-[50%] translate-x-[-50%] 
translate-y-[-50%] bg-gray-100 p-[25px]  "
      >
        <div className="flex justify-between">
          <div className="text-[20px] font-semibold ">Register</div>
          <div
            className="w-[15px] h-[15px] cursor-pointer"
            onClick={closeModal}
          >
            <Image src={Close} alt="" />
          </div>
        </div>
        <div className="py-12 text-center">
          <p>Sorry, We are facing some technical Erro</p>
          <p>
            Please register here :
            <Link
              href="https://forms.gle/aTo77LbEU7N5CLLKA"
              className="text-blue-600"
              target="_blank"
            >
              {" "}
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterFallback;
