import React, { useEffect, useRef, useState } from "react";
import Close from "./Icons/close.png";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import MinuteCounter from "./Counter/MinuteCounter";
import { modal } from "./Modal";
import SuccessAlert from "./SuccessAlert";

const Register = ({ setShow }) => {
  const [showOtp, setShowOtp] = useState(false);
  const [successAert, setSuccessAert] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState({
    disableVerifyBtn: false,
    verifyOtpDisabledSeconds: 90,
  });
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const closeModal = () => {
    setShow(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    category: "",
    company: "",
    otp: "",
    district: "Malappuram",
  });
  const [errors, setErrors] = useState({});
  const [otpStatus, setOtpStatus] = useState({
    status: false,
    message: "",
  });
  const keralaDistricts = [
    "Thiruvananthapuram",
    "Kollam",
    "Pathanamthitta",
    "Alappuzha",
    "Kottayam",
    "Idukki",
    "Ernakulam",
    "Thrissur",
    "Palakkad",
    "Malappuram",
    "Kozhikode",
    "Wayanad",
    "Kannur",
    "Kasaragod",
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "phoneNumber" ? value.replace(/[^0-9]/g, "") : value,
    }));
    setErrors({ ...errors, [name]: "", showOtp: "" });
  };
  const handleInputChange = (index, event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;

    setOtp(newOtp);
    setErrors({ ...errors, otp: "" });
    if (event.target.value !== "" && index < 3) {
      inputRefs[index + 1].current.focus();
    }
    if (event.target.value !== "" && index === 3) {
      axios
        .post("/api/otp/isvalid", {
          otp: newOtp.join(""),
          phoneNumber: formData.phoneNumber,
        })
        .then((response) => {
          setOtpStatus({
            ...setVerifyOtp,
            status: response.data.status,
            message: response.data.message,
          });
        })
        .catch((error) => {
          setOtpStatus({
            ...setVerifyOtp,
            status: error.response.data.status,
            message: error.response.data.message,
          });
        });
    }
  };
  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs[index - 1].current.focus();
    }
  };
  const validateForm = () => {
    const newErrors = {};

    // Validate Full Name
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    // Validate Phone Number
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (formData.phoneNumber.length !== 10) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }

    // Validate Category
    if (!formData.district || formData.district == "") {
      newErrors.district = "District is required";
    }
    // Validate Category
    if (!formData.category || formData.category == "") {
      newErrors.category = "Category is required";
    }

    // Validate Company

    // if (otp.join("") == "") {
    //   newErrors.otp = "OTP required";
    // }
    // if (showOtp == false) {
    //   newErrors.showOtp = "Please verify your number";
    // }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const isDisabled = () => {
    const verifyOtp = JSON.parse(localStorage.getItem("verifyOtp"));
    if (verifyOtp == null) return { disabled: false };
    let currentTime = new Date();
    const oneMinuteLater = new Date(
      new Date(verifyOtp.start).getTime() + 60000
    );
    if (currentTime >= oneMinuteLater) {
      return { disabled: false };
    } else {
      return {
        disabled: true,
      };
    }
  };
  const sendOtp = (e) => {
    // setVerifyOtp({...verifyOtp,})
    e.target.disabled = true;
    axios
      .post("/api/otp/send", { phoneNumber: formData.phoneNumber })
      .then(() => {
        setShowOtp(true);
        toast("OTP send to your mobile number", {
          type: "success",
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        e.target.disabled = false;
      })
      .catch((err) => {
        console.log(err);
        toast(err.response.data.message, {
          type: "error",
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        e.target.disabled = false;
      });
  };
  const handleFormSubmit = (event) => {
    const isValid = validateForm();
    if (isValid) {
      event.target.disabled = true;
      axios
        .post("/api/otp/verify", { ...formData, otp: otp.join("") })
        .then((response) => {
          setSuccessAert(true);
          event.target.disabled = false;
        })
        .catch((err) => {
          event.target.disabled = false;
          toast(err.response.data.message, {
            type: "error",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };

  return (
    <>
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
        {errors.showOtp && !showOtp && (
          <div className="w-full  bg-red-300 p-3 text-red-800 rounded-md">
            {errors.showOtp}
          </div>
        )}
        <div className="overflow-auto ">
          <div className="mb-3 mt-4">
            <label className="label text-primary-blue">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="text-red-500 text-sm">{errors.name}</div>
            )}
          </div>
          <div className="mb-3 ">
            <label className="label text-primary-blue">Phone Number</label>
            <div className="w-full flex items-center gap-x-5">
              <div className="w-full">
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="input"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              {/* <div>
                <button
                  type="button"
                  className="bg-primary-cyan px-5 py-2 rounded-full text-white disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={
                    formData.phoneNumber.length != 10 ||
                    verifyOtp.disableVerifyBtn
                  }
                  onClick={sendOtp}
                >
                  Verify
                </button>
              </div> */}
            </div>
            {showOtp && (
              <span className="text-[13px] flex">
                <MinuteCounter
                  second={verifyOtp.verifyOtpDisabledSeconds}
                  onStart={() => {
                    setVerifyOtp({ ...verifyOtp, disableVerifyBtn: true });
                    localStorage.setItem(
                      "verifyOtp",
                      JSON.stringify({ disabled: true, start: new Date() })
                    );
                  }}
                  onEnd={() => {
                    setVerifyOtp({ ...verifyOtp, disableVerifyBtn: false });
                    localStorage.removeItem("verifyOtp");
                  }}
                />
              </span>
            )}

            {errors.phoneNumber && (
              <div className="text-red-500 text-sm">{errors.phoneNumber}</div>
            )}
          </div>
          {showOtp && (
            <div className="mb-3">
              <label className="label text-primary-blue">OTP</label>
              <div className="grid grid-cols-4 gap-x-4">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    className={`input ${
                      otpStatus.status && otpStatus.message != ""
                        ? "border border-green-500"
                        : !otpStatus.status && otpStatus.message !== ""
                        ? "border border-red-500"
                        : ""
                    }`}
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleInputChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    ref={inputRefs[index]}
                  />
                ))}
              </div>

              {otpStatus.message !== "" && (
                <div
                  className={`${
                    otpStatus.status ? "text-green-600" : "text-red-500"
                  } text-sm`}
                >
                  {otpStatus.message}
                </div>
              )}
              {errors.otp && (
                <div className="text-red-500 text-sm">{errors.otp}</div>
              )}
            </div>
          )}
          <div className="mb-3">
            <label className="label text-primary-blue">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="label text-primary-blue">District</label>
            <select
              name="district"
              id=""
              className="input"
              onChange={handleChange}
              value={formData.district}
            >
              <option value="" disabled>
                Select your district
              </option>
              {keralaDistricts.map((district, index) => (
                <option value={district} key={`district_${index}`}>
                  {district}
                </option>
              ))}
            </select>
            {errors.district && (
              <div className="text-red-500 text-sm">{errors.district}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="label text-primary-blue">Category</label>
            <select
              id="mySelect"
              name="category"
              className="input"
              onChange={handleChange}
              value={formData.category}
            >
              <option value="" selected disabled>
                Select your category
              </option>
              <option value="Student">Student</option>
              <option value="Startup"> Startup</option>
              <option value="Local Business/SME">Local Business/SME </option>
              <option value="Working Professional">Working Professional</option>
              <option value="NRE or Gulf Returnees">
                NRE or Gulf Returnees
              </option>
              <option value="Other">Other</option>
            </select>
            {errors.category && (
              <div className="text-red-500 text-sm">{errors.category}</div>
            )}
          </div>
          <div className="mb-4  ">
            <label className="label text-primary-blue">
              Company/Organaisation/School/College Name
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company/Organaisation/School/College Name"
              className="input"
              value={formData.company}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <div className="text-red-500 text-sm">{errors.company}</div>
            )}
          </div>
        </div>

        <div className="col-span-10 lg:col-span-2 flex justify-center items-center">
          <button
            type="button"
            className="w-full bg-primary-cyan  px-8 py-3 rounded-full text-white disabled:cursor-not-allowed disabled:opacity-50"
            onClick={handleFormSubmit}
          >
            Register
          </button>
        </div>
      </div>
      {successAert && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-screen justify-center z-[111] bg-black bg-opacity-50  overflow-hidden"
            onClick={() => setSuccessAert(false)}
          ></div>
          <SuccessAlert closeModal={() => setSuccessAert(false)} />
        </>
      )}
    </>
  );
};

export default Register;
