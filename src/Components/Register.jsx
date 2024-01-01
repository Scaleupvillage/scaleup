import React, { useState } from "react";
import Close from "./Icons/close.png";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

const Register = ({ setShow }) => {
  const [showOtp, setShowOtp] = useState(false);
  const closeModal = () => {
    setShow(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    category: "",
    compony: "",
    otp: "",
    district:""
  });
  const [errors, setErrors] = useState({});
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
      [name]: value,
    }));
    setErrors({ ...errors, [name]: "" });
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
    if (!formData.compony.trim()) {
      newErrors.compony = "Company/Organization is required";
    }
    // Validate Company

    if (formData.otp == "") {
      newErrors.otp = "otp required";
    }
    if (showOtp == false) {
      newErrors.showOtp = "Please verify your number";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const sendOtp = () => {
    axios
      .get("/api/otp/" + formData.phoneNumber)
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
      })
      .catch((err) => {
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
  };
  const handleFormSubmit = () => {
    const isValid = validateForm();

    if (isValid) {
      axios
        .post("/api/otp/", { ...formData })
        .then((response) => {
          toast("Registered Successfully", {
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
        })
        .catch((err) => {
          console.log(err.response.data.message);
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
    <div
      className="w-[95%] max-w-[450px] z-[110] rounded-lg fixed top-[50%] left-[50%] translate-x-[-50%] 
    translate-y-[-50%] bg-gray-100 p-[25px]  "
    >
      <div className="flex justify-between">
        <div className="text-[20px] font-semibold ">Register</div>
        <div className="w-[15px] h-[15px]" onClick={closeModal}>
          <Image src={Close} alt="" />
        </div>
      </div>
      {errors.showOtp && !showOtp && (
        <div className="w-full  bg-red-300 p-3 text-red-800 rounded-md">
          {errors.showOtp}
        </div>
      )}
      <div>
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
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                className="input"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                type="button"
                className="bg-primary-cyan px-5 py-2 rounded-full text-white disabled:cursor-not-allowed disabled:opacity-75"
                disabled={formData.phoneNumber.length != 10}
                onClick={sendOtp}
              >
                Verify{" "}
              </button>
            </div>
          </div>
          {errors.phoneNumber && (
            <div className="text-red-500 text-sm">{errors.phoneNumber}</div>
          )}
        </div>
        {showOtp && (
          <div className="mb-3">
            <label className="label text-primary-blue">OTP</label>
            <input
              type="text"
              name="otp"
              placeholder="Enter your otp"
              className="input"
              value={formData.otp}
              onChange={handleChange}
            />
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
            <option value="Student">Student</option>
            <option value="Entruprenurs"> Entruprenurs</option>
            <option value="Professional">Professional</option>
            <option value="Wantrprenuers">Wantrprenuers</option>
            <option value="Working">Working</option>
            <option value="NREs or Gulf Returnees">
              NREs or Gulf Returnees
            </option>
            <option value="Others">Others</option>
          </select>
          {errors.category && (
            <div className="text-red-500 text-sm">{errors.category}</div>
          )}
        </div>
        <div className="mb-4  ">
          <label className="label text-primary-blue">
            Compony/Organisation
          </label>
          <input
            type="text"
            name="compony"
            placeholder="Compony/Organisation"
            className="input"
            value={formData.compony}
            onChange={handleChange}
          />
          {errors.phoneNumber && (
            <div className="text-red-500 text-sm">{errors.compony}</div>
          )}
        </div>
      </div>

      <div className="col-span-10 lg:col-span-2 flex justify-center items-center">
        <button
          type="button"
          className="w-full bg-primary-cyan  px-8 py-3 rounded-full text-white"
          onClick={handleFormSubmit}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
