import React from "react";
import Close from "./Icons/close.png";
import Image from "next/image";

const Register = ({ setShow }) => {
  const closeModal = () => {
    setShow(false);
  };
  return (
    <div
      className="w-[95%] max-w-[450px] z-50 rounded-lg fixed top-[50%] left-[50%] translate-x-[-50%] 
    translate-y-[-50%] bg-gray-100 p-[25px]"
    >
      <div className="flex justify-between">
        <div className="text-[20px] font-semibold mb-6">Register</div>
        <div className="w-[15px] h-[15px]" onClick={closeModal}>
          <Image src={Close} />
        </div>
      </div>

      <div>
        <div>
          <label className="label text-primary-blue">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input"
          />
        </div>
        <div>
          <label className="label text-primary-blue">Phone Number</label>
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
          className="w-full bg-primary-cyan  px-8 py-3 rounded-full text-white"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
