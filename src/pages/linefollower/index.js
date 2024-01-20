import React from "react";
import Navbar from "@/Components/Layout/Navbar";
import PageMain from "@/Components/PageMain";
import CalenderFill from "@/Components/Icons/CalenderFill";
import LocatioIcon from "@/Components/Icons/LocatioIcon";
import CupIcon from "@/Components/Icons/CupIcon";
import Link from "next/link";
import Scale from "@/Components/Icons/Scale";
import Question from "@/Components/Icons/Question";
import UserGroup from "@/Components/Icons/UserGroup";
import Footer from "@/Components/Layout/Footer";
// import  from '@/Components/'
const LineFollower = () => {
  return (
    <>
      <Navbar isAbsolute={false} />
      <PageMain
        title={"Line Follower Robot Competition"}
        overlay={true}
        main={{
          style: {
            backgroundImage:
              "url(https://vaanahaa.com/wp-content/uploads/2018/06/line-follwer-1.jpg)",
            backgroundSize: "100% 100%",
            backgroundPosition: "50%",
          },
        }}
      />

      <div className="custom-container py-[50px]">
        <div className="flex justify-evenly items-center  py-8 ">
          <div className="flex justify-center items-center">
            <div className="bg-[#003a6d47]  w-[40px] h-[40px] rounded-full mr-4 flex justify-center items-center">
              <CalenderFill className="fill-primary-blue" />
            </div>
            <h3 className="text-[19px]">February 2-3, 2024</h3>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <div className="bg-[#b203ed39] w-[40px] h-[40px] rounded-full mr-4 flex justify-center items-center">
                <LocatioIcon width="20" className="fill-primary-purple" />
              </div>
              <h3 className="text-[19px]">
                Shifa Convention Centre, Perinthalmanna
              </h3>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <div className="bg-[#ffcf3f54] w-[40px] h-[40px] rounded-full mr-4 flex justify-center items-center">
                <CupIcon className="fill-primary-yellow" />
              </div>
              <h3 className="text-[19px]">15,000</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-container py-[50px]">
        <h3 className=" text-[20px] lg:text-[36px] title wave-before">
          What is a Line Follower Robot Competition?
        </h3>
        <p>
          A Line Follower Robot Competition is an exciting and challenging event
          where participants design, build, and program robots capable of
          autonomously following a predefined path marked by a visible line.
          These competitions are not only a showcase of technical prowess but
          also a celebration of innovation and creativity in the field of
          robotics.
        </p>
      </div>
      <div className="custom-container py-[50px]">
        <h3 className=" text-[20px] lg:text-[36px] title wave-before">
          Event Highlights
        </h3>
        <ul className="list-disc px-4 lg:px-12">
          <li>
            <p>
              Date & Venue: February 2-3, 2024, at the Shifa Convention Centre,
              Perinthalmanna.
            </p>
          </li>
          <li>
            <p>Total Prize Pool: Compete for a total prize pool of ₹15,000!</p>
          </li>
        </ul>
      </div>
      <div className="custom-container py-[50px]">
        <h3 className=" text-[20px] lg:text-[36px] title wave-before">
          Instructions for Participants
        </h3>
        <ul className="list-disc px-4 lg:px-12">
          <li>
            <p>
              Eligibility: Open to all college and school students passionate
              about robotics.
            </p>
          </li>
          <li>
            <p>
              Registration: Limited slots available. Register online at
              <Link
                href="www.scaleupconclave.com/linefollower"
                className="text-blue-600"
              >
                {" "}
                www.scaleupconclave.com/linefollower{" "}
              </Link>{" "}
              .
            </p>
          </li>
          <li>
            <p>Team Size: Maximum of three members per team.</p>
          </li>
          <li>
            <p>
              Robot Specifications: Line follower robots must adhere to the
              specified size and weight limits.
            </p>
          </li>
          <li>
            <p>
              Competition Format: The event consists of multiple rounds,
              including precision challenges and obstacle navigation.
            </p>
          </li>
          <li>
            <p>
              Technical Requirements: Ensure your robot&apos;s sensors and
              programming align with the competition guidelines.
            </p>
          </li>
        </ul>
      </div>

      <div className="custom-container py-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4">
          <div className="  bg-white  shadow-md hover:shadow-xl border-[1px] rounded-lg">
            <div className="w-full py-2 px-4 flex items-center border-b-[1px] border-primary-purple">
              <div className="bg-[#b203ed39]  w-[40px] h-[40px] rounded-full mr-4">
                <Question className="stroke-primary-purple" />
              </div>

              <h3 className="title ">How to Participate</h3>
            </div>
            <div className="p-3">
              <ul className="list-disc px-8">
                <li>Register online at</li>
                <li>
                  Receive a confirmation email or Whatsapp with event details
                </li>
                <li>
                  Bring your line follower robot to the Shifa Convention Centre
                  on the event day.
                </li>
                <li>
                  Participate in the thrilling competition and showcase your
                  robot&apos;s capabilities.
                </li>
              </ul>
            </div>
          </div>
          <div className="  bg-white  shadow-md hover:shadow-xl border-[1px] rounded-lg">
            <div className="w-full py-2 px-4 flex items-center border-b-[1px] border-primary-blue">
              <div className="bg-[#003a6d44]  w-[40px] h-[40px] rounded-full mr-4 flex justify-center items-center">
                <UserGroup width="27" className="fill-primary-blue" />
              </div>

              <h3 className="title ">Target Audience</h3>
            </div>
            <div className="p-3">
              <ul className="list-disc px-8">
                <li>
                  College and school students interested in robotics and
                  automation.
                </li>
                <li>
                  Robotics enthusiasts looking for a challenging competition to
                  showcase their skills.
                </li>
              </ul>
            </div>
          </div>
          <div className="  bg-white  shadow-md hover:shadow-xl border-[1px] rounded-lg">
            <div className="w-full py-2 px-4 flex items-center border-b-[1px] border-primary-blue">
              <div className="bg-[#ffcf3f54]  w-[40px] h-[40px] rounded-full mr-4 flex justify-center items-center">
                <Scale width="27" className="fill-primary-yellow" />
              </div>

              <h3 className="title ">Judging Criteria</h3>
            </div>
            <div className="p-3">
              <ul className="list-disc px-8">
                <li>
                  Precision: How accurately does the robot follow the specified
                  line? .
                </li>
                <li>Speed: The time taken to complete the course.</li>
                <li>
                  Innovation: Any unique features or creative elements
                  incorporated into the robot&apos;s design.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LineFollower;
