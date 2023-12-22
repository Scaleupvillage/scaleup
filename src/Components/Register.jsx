import React, { useState } from "react";
import Close from "./Icons/close.png";
import Image from "next/image";
import axios from "axios";

const Register = ({ setShow }) => {
  const closeModal = () => {
    setShow(false);
  };

  const handleClick = () => {
    axios.get("/api/otp/8137886298").then(() => {});
  };
   const [formData, setFormData] = useState({
     name: "",
     phoneNumber: "",
     email: "",
     category: "",
     compony: "",
   });
    const [errors, setErrors] = useState({});
     const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData((prevData) => ({
         ...prevData,
         [name]: value,
       }));
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
       if (!formData.category) {
         newErrors.category = "Category is required";
       }

       // Validate Company
       if (!formData.compony.trim()) {
         newErrors.compony = "Company/Organization is required";
       }

       setErrors(newErrors);

       // Return true if there are no errors
       return Object.keys(newErrors).length === 0;
     };
     const handleFormSubmit = () => {
       const isValid = validateForm();

       if (isValid) {
         // Perform your form submission logic here
         console.log("Form submitted:", formData);
       }
     };
  return (
    <div
      className="w-[95%] max-w-[450px] z-50 rounded-lg fixed top-[50%] left-[50%] translate-x-[-50%] 
    translate-y-[-50%] bg-gray-100 p-[25px]  "
    >
      <div className="flex justify-between">
        <div className="text-[20px] font-semibold mb-6">Register</div>
        <div className="w-[15px] h-[15px]" onClick={closeModal}>
          <Image src={Close} />
        </div>
      </div>

      <div>
        <div className="mb-1">
          <label className="label text-primary-blue">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="text-red-500">{errors.name}</div>}
        </div>
        <div className="mb-1">
          <label className="label text-primary-blue">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className="input"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && (
            <div className="text-red-500">{errors.phoneNumber}</div>
          )}
        </div>
        <div className="mb-1">
          <label className="label text-primary-blue">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="text-red-500">{errors.email}</div>}
        </div>
        <div className="mb-1">
          <label className="label text-primary-blue">Category</label>
          <select id="mySelect" className="input">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          {errors.phoneNumber && (
            <div className="text-red-500">{errors.category}</div>
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
            <div className="text-red-500">{errors.compony}</div>
          )}
        </div>
      </div>

      <div className="col-span-10 lg:col-span-2 flex justify-center items-center">
        <button
          type="button"
          className="w-full bg-primary-cyan  px-8 py-3 rounded-full text-white"
          onClick={validateForm}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
