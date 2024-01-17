/* eslint-disable @next/next/no-img-element */
import Footer from "@/Components/Layout/Footer";
import Navbar from "@/Components/Layout/Navbar";
import React from "react";
import bootcamp1 from "@/assets/images/bootcamp1.png";
import faisal from "@/assets/images/bootcampspeakers/faisal.png";
import arranjit from "@/assets/images/bootcampspeakers/arranjit.png";
import athif from "@/assets/images/bootcampspeakers/athif.png";
import ajmal from "@/assets/images/bootcampspeakers/ajmal.png";
import sameer from "@/assets/images/bootcampspeakers/sameer.png";
import praveen from "@/assets/images/bootcampspeakers/praveen.png";
import people from "@/assets/images/people.png";
import bootcampoverviewleft from "@/assets/images/bootcampoverviewleft.png";
import bootcampoverviewright from "@/assets/images/bootcampoverviewright.png";
import rocket from "@/assets/images/rocket.png";
import Image from "next/image";
import Link from "next/link";
const Bootcamp = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-primary-blue">
        <div className="custom-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 py-[50px] lg:py-[100px] gap-6">
            <div>
              <h1
                className="text-white title text-[20px] lg:text-[60px]"
                style={{ color: "white" }}
              >
                2 Days Business
              </h1>
              <h1
                className="text-white title text-[20px] lg:text-[55px]"
                style={{ color: "white" }}
              >
                ScaleUp Bootcamp
              </h1>
              <p
                className=" text-[14px] lg:text-[30px]"
                style={{ color: "white" }}
              >
                Business Elevate: Connecting Ambitions, Strategies, and Success
                at the ScaleUp Conclave Bootcamp.
              </p>
              <div className="mt-8">
                <p
                  style={{ color: "white" }}
                  className="text-[14px] lg:text-[25px]"
                >
                  February 2,3- 2024
                </p>
                <p
                  style={{ color: "white" }}
                  className="text-[14px] lg:text-[25px]"
                >
                  Royal Hall ,Shifa Convention Center
                </p>
                <p
                  style={{ color: "white" }}
                  className="text-[14px] lg:text-[25px]"
                >
                  Perinthalmanna
                </p>
                <div className="flex justify-start">
                  <Link
                    className="bg-primary-yellow px-5 py-3 rounded-full mt-8 font-bold block"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc7Vv449AmGMbGv8_b-qCBGHFKERvFz6SydlVASVR9mYfYucA/viewform?usp=sf_link"
                    target="_blank"
                  >
                    BOOK NOW
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image src={bootcamp1.src} alt="" width="500" height="500" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-yellow">
        <div className="custom-container py-[50px]">
          <h2 className="text-[36px] title text-center ">Master Trainers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex justify-center items-center flex-col">
              <Image
                src={faisal.src}
                width="350"
                height="200"
                className="h-[270px]"
                alt="faisal syed"
              />
              <div className="my-4">
                <h3 className="text-[24px] font-bold text-center">
                  Faisal P Seyd
                </h3>
                <p className="text-center ">
                  Professor, Corporate Trainer, Strategic Consultant
                </p>
                <p className="text-center ">
                  Academic Dean, The{" "}
                  <Link
                    href="https://www.thebschool.org"
                    className="text-blue-600"
                    target="_blank"
                  >
                    B School International{" "}
                  </Link>{" "}
                </p>
                <p className="text-center ">
                  Former Professor of UK University in Maldives
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <Image
                src={arranjit.src}
                width="340"
                height="200"
                className="h-[370px]"
                alt="arranjit"
              />
              <div className="my-4">
                <h3 className="text-[24px] font-bold text-center">
                  AR Ranjith
                </h3>
                <p className="text-center">
                  CEO{" "}
                  <Link
                    href="https://arranjith.com"
                    className="text-blue-600"
                    target="_blank"
                  >
                    {" "}
                    Bramma,
                  </Link>{" "}
                  Business strategist for 600+ companies
                </p>
                <p className="text-center">Mentor for 2000+ entrepreneurs</p>
                <p className="text-center">Conducted 500+ quiz shows</p>
                <p className="text-center">Trained 2 lakh+ people</p>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-container py-[50px]">
          <h2 className="text-[36px] title text-center ">Speakers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8">
            <div className="flex justify-center items-center flex-col h-[400px]">
              <div className="h-[70%]">
                <Image
                  src={ajmal.src}
                  width="300"
                  height="200"
                  className=" h-full"
                  alt="ajmal"
                />
              </div>
              <div className="h-[30%] w-full">
                <h3 className="text-[24px] font-bold text-center">Ajmal TP</h3>
                <p className="text-center">
                  Founder,{" "}
                  <Link
                    href="https://www.linkedin.com/in/ajmaltpin/?originalSubdomain=in"
                    target="_blank"
                    className="text-blue-600"
                  >
                    Brandbuji
                  </Link>{" "}
                </p>
                <p className="text-center">1000+ Projects Designed</p>
                <p className="text-center">100+ Brands Consulted</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col h-[400px]">
              <div className="h-[70%]">
                <Image
                  src={athif.src}
                  width="300"
                  height="200"
                  className="h-full"
                  alt="athif"
                />
              </div>
              <div className=" h-[30%]  w-full">
                <h3 className="text-[24px] font-bold text-center">
                  Athif Muhammed
                </h3>
                <p className="text-center">
                  CEO,{" "}
                  <Link
                    href="https://inspler.com"
                    target="_blank"
                    className="text-blue-600"
                  >
                    {" "}
                    Inspler eCommerce PVT Ltd
                  </Link>
                </p>
                <p className="text-center">
                  Shopify Expert - ECommerce Consultant
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="h-[70%]">
                <Image
                  src={praveen.src}
                  width="300"
                  height="200"
                  className="h-full"
                  alt="athif"
                />
              </div>
              <div className="h-[30%]">
                <h3 className="text-[24px] font-bold text-center">
                  CA Praveen
                </h3>
                <p className="text-center ">
                  ACA Chartered Accountant{" "}
                  <Link
                    target="_blank"
                    className="text-blue-600"
                    href="https://www.linkedin.com/company/praveen-shabana-co-llp-chartered-accountants/?originalSubdomain=in"
                  >
                    Praveen Shabana & CO LLP
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="h-[70%]">
                <Image
                  src={sameer.src}
                  width="300"
                  height="200"
                  className="h-full"
                  alt="athif"
                />
              </div>
              <div className="h-[30%]">
                <h3 className="text-[24px] font-bold text-center">CS Sameer</h3>
                <p className="text-center">Company Secretory</p>
                <p className="text-center">
                  {" "}
                  <Link
                    href="http://pmacs.in"
                    target="_blank"
                    className="text-blue-600"
                  >
                    PMA & Associates{" "}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#361F5B]">
        <div className="custom-container py-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex justify-center items-center">
              <h3
                className="text-[20px] lg:text-[60px] font-bold "
                style={{ color: "white" }}
              >
                The most awaited business Master Class is back!
              </h3>
            </div>
            <div>
              <p className="text-2xl mb-6" style={{ color: "white" }}>
                Are you ready to propel your business to greater heights?
              </p>
              <p className="text-2xl my-4" style={{ color: "white" }}>
                <span className="font-bold">Join us </span> for a transformative
                experience at the first-ever &quot;
                <span className="font-bold">
                  Business ScaleUp Bootcamp,&quot;
                </span>
                an exclusive <span className="font-bold"> two-day event </span>
                brought to you by ScaleUp Conclave.
              </p>
              <p className="text-primary-yellow font-bold text-[30px] my-6">
                Who Can attend :
              </p>
              <p className="text-2xl" style={{ color: "white" }}>
                Designed for{" "}
                <span className="text-primary-yellow">
                  local business owners, SMEs
                </span>
                , and{" "}
                <span className="text-primary-yellow">
                  aspiring entrepreneurs
                </span>
                , this bootcamp is your gateway to strategic insights and
                practical techniques for effective business scaling.
              </p>
            </div>
          </div>
          <div>
            <img
              src={people.src}
              width="300"
              height="300"
              className="w-full mt-8"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#013B6C]">
        <div className="custom-container py-[50px]">
          <h2
            className="title text-[36px] text-center mb-4"
            style={{ color: "white" }}
          >
            day 1
          </h2>
          <div className="w-full overflow-x-auto">
            <table className="text-white">
              <thead>
                <tr>
                  <th className="w-[25%] p-4 border-4">Time</th>
                  <th className="w-[75%] p-4 border-4">Event</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-4">9:00 AM - 10:00 AM</td>
                  <td className="p-4 border-4">
                    Breakfast and Kickoff - Energizing breakfast and icebreakers
                    led by the ScaleUp Team.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-4">10:00 AM - 11:00 AM</td>
                  <td className="p-4 border-4">
                    System Building & Global Scaling Insights - Strategies for
                    system design and global business expansion with Faisal
                    Seyd.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-4">11:00 AM - 2:00 PM</td>
                  <td className="p-4 border-4">
                    Lunch Break and Canvas Workshop - Networking, refreshments,
                    and a hands-on Business Canvas Assessment workshop.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-4">2:00 PM - 4:30 PM</td>
                  <td className="p-4 border-4">
                    Expert Panel and Online Presence - Panel discussion with
                    industry experts and insights on online presence and
                    branding.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-4">4:30 PM - 6:00 PM</td>
                  <td className="p-4 border-4">
                    Networking & Branding Workshop - Connect over tea and
                    participate in a branding workshop with Ajmal TP.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-[#361F5B]">
        <div className="custom-container py-[50px]">
          <h2
            className="title text-[36px] text-center mb-4"
            style={{ color: "white" }}
          >
            day 2
          </h2>
          <div className="w-full overflow-x-auto">
            <table className="text-white">
              <thead>
                <tr>
                  <th className="w-[25%] p-4 border-4">Time</th>
                  <th className="w-[75%] p-4 border-4">Event</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-4">9:00 AM - 11:00 AM</td>
                  <td className="p-4 border-4">
                    Breakfast and Recap - Breakfast and a concise recap of Day 1
                    with the Bramma Team.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-4">11:00 AM - 1:00 PM</td>
                  <td className="p-4 border-4">
                    In-depth Training with AR Ranjith - AR Ranjith conducts an
                    in-depth training session with practical exercises and case
                    studies.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-4">1:00 PM - 3:00 PM</td>
                  <td className="p-4 border-4">
                    Lunch Break and Group Workshops - Networking over lunch,
                    followed by group workshops and mentoring by AR Ranjith.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-4">3:00 PM - 4:30 PM</td>
                  <td className="p-4 border-4">
                    Action Planning and Networking - Participants outline
                    business scaling goals, followed by networking over high
                    tea.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-4">4:30 PM - 6:00 PM</td>
                  <td className="p-4 border-4">
                    Goal-setting Workshop and Closing - Interactive goal-setting
                    workshop and closing remarks from the Bramma & ScaleUp Team.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-primary-yellow">
        <div className="custom-container py-[100px]">
          <div className="grid grid-cols-12">
            <div className=" col-span-12 lg:col-span-4 flex justify-center items-center">
              <Image
                src={bootcampoverviewleft.src}
                width={300}
                height={500}
                alt=""
                className="w-[150px] md:w-[300px]"
              />
            </div>
            <div className="col-span-12 lg:col-span-8">
              <Image
                src={bootcampoverviewright.src}
                width={500}
                height={500}
                className="w-full h-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#361F5B]">
        <div className="custom-container py-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-between">
              <div className="mb-8">
                <h2 className="title text-[45px]" style={{ color: "white" }}>
                  Fees: 8500 INR
                </h2>
                <p className="text-[20px]" style={{ color: "white" }}>
                  (Including 2 Days of Breakfast, Lunch, and Refreshments )
                </p>
                <p className="text-[20px]" style={{ color: "white" }}>
                  Limited Seats Only*
                </p>
                <div className="flex justify-start">
                  <Link
                    className="bg-primary-yellow px-5 py-3 rounded-full mt-8 font-bold block capitalize"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc7Vv449AmGMbGv8_b-qCBGHFKERvFz6SydlVASVR9mYfYucA/viewform?usp=sf_link"
                    target="_blank"
                  >
                    BOOK YOUR SLOT
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-[30px]" style={{ color: "white" }}>
                  Reach Out
                </h3>
                <p className="text-[20px]" style={{ color: "white" }}>
                  ScaleUp Conclave
                </p>
                <p className="text-[20px]" style={{ color: "white" }}>
                  +91 90 48 17 00 77
                </p>
                <p className="text-[20px]" style={{ color: "white" }}>
                  info@scaleupconclave.com
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image src={rocket.src} width="500" height="300" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bootcamp;
