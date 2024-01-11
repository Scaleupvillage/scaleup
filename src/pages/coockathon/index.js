import Footer from "@/Components/Layout/Footer";
import Navbar from "@/Components/Layout/Navbar";
import PageMain from "@/Components/PageMain";
import React from "react";
import coockathon from "@/assets/images/coockathon.png";
import Question from "@/Components/Icons/Question";
import Scale from "@/Components/Icons/Scale";
import CalenderFill from "@/Components/Icons/CalenderFill";
const Coockathon = () => {
  return (
    <>
      <Navbar />
      <PageMain
        title={"Cookathon "}
        introduction={[
          {
            text: "Cookathon, an innovative food innovation challenge brought to you by Scaleup Village, invites all passionate food entrepreneurs to showcase their creativity and bring innovative, market-ready products to the forefront of the Direct-to-Consumer (D2C) market.",
          },
        ]}
        introductionImages={{
          images: [
            {
              src: coockathon.rc,
              alt: "",
              width: "100",
            },
          ],
        }}
        main={{
          style: {
            backgroundImage: `url(${coockathon.src})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            height: "600px",
          },
        }}
      />
      <div className="flex justify-center items-center py-5">
        <button
          type="button"
          className="bg-primary-purple shadow-lg shadow-primary-purple px-8 py-3 rounded-full text-white"
        >
          Register Now
        </button>
      </div>

      <div className="custom-container py-[100px]">
        <div className="grid grid-cols-12 gap-4 lg:gap-x-12">
          <div className="col-span-12  lg:col-span-6 flex flex-col gap-4 lg:gap-x-8">
            <div className="  bg-white  shadow-md hover:shadow-xl border-[1px] rounded-lg">
              <div className="w-full py-2 px-4 flex items-center border-b-[1px] border-primary-purple">
                <div className="bg-[#b203ed39]  w-[40px] h-[40px] rounded-full mr-4">
                  <Question className="stroke-primary-purple" />
                </div>

                <h3 className="title ">Who Can Participate </h3>
              </div>
              <div className="p-3">
                <ul className="list-disc px-8">
                  <li>
                    Open to all residents of Kerala with a passion for food
                    innovation and entrepreneurship.
                  </li>
                  <li>
                    Individuals, teams, and companies are all welcome to
                    participate.
                  </li>
                </ul>
              </div>
            </div>
            <div className="  bg-white  shadow-md hover:shadow-xl border-[1px] rounded-lg">
              <div className="w-full py-2 px-4 flex items-center border-b-[1px] border-primary-blue">
                <div className="bg-[#003a6d44]  w-[40px] h-[40px] rounded-full mr-4 flex justify-center items-center">
                  <Scale width="27" className="fill-primary-blue" />
                </div>

                <h3 className="title ">Judging Criteria</h3>
              </div>
              <div className="p-3">
                <ul className="list-disc px-8">
                  <li>
                    Feasibility: Viability and practicality of the product.
                  </li>
                  <li>
                    D2C Friendliness: Suitability for direct-to-consumer
                    distribution.
                  </li>
                  <li>Relevance: Alignment with market demands and trends.</li>
                  <li>Price: Affordability and competitiveness.</li>
                  <li>Packaging: Appeal and practicality.</li>
                  <li>
                    Market Potential: Anticipated demand and potential for
                    growth.
                  </li>
                  <li>
                    Presentation: Clarity, persuasiveness, and engagement during
                    the pitch.
                  </li>
                  <li>
                    Originality: Uniqueness and creativity of the product
                    concept.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12  lg:col-span-6">
            <div className="  bg-white  shadow-md hover:shadow-xl border-[1px] rounded-lg">
              <div className="w-full py-2 px-4 flex items-center border-b-[1px] border-primary-purple">
                <div className="bg-[#ffcf3f5c]  w-[40px] h-[40px] rounded-full mr-4 flex justify-center items-center">
                  <CalenderFill className="fill-primary-yellow" />
                </div>

                <h3 className="title ">Important Dates </h3>
              </div>
              <div className="p-3">
                <div className="  bg-white   rounded-lg">
                  <div className="w-full py-2 px-4 flex items-center border-b-[1px] border-primary-purple">
                    <div className="  w-[40px] h-[40px] rounded-full mr-4 flex justify-center items-center">
                      <CalenderFill className="fill-primary-yellow" />
                    </div>

                    <h3 className="title ">JAN 13: Official Announcement</h3>
                  </div>
                  <div className="p-3">
                    <ul className="list-disc px-8">
                      <li>
                        Release the Cookathon challenge on social media
                        platforms, rallying food bloggers to amplify the
                        message.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="  bg-white   rounded-lg">
                  <div className="w-full py-2 px-4 flex items-center border-b-[1px] border-primary-purple">
                    <div className="  w-[40px] h-[40px] rounded-full mr-4 flex justify-center items-center">
                      <CalenderFill className="fill-primary-yellow" />
                    </div>

                    <h3 className="title ">
                      Jan 27: Preliminary Screening at Perinthalmanna
                    </h3>
                  </div>
                  <div className="p-3">
                    <ul className="list-disc px-8">
                      <li>
                        Participants present their food-related D2C products in
                        person to an expert team, showcasing feasibility, D2C
                        friendliness, pricing, packaging, and market potential.
                      </li>
                      <li>
                        Judges evaluate entries based on innovation,
                        feasibility, relevance, pricing strategy, packaging
                        appeal, market fit, and presentation skills.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="  bg-white   rounded-lg">
                  <div className="w-full py-2 px-4 flex items-center border-b-[1px] border-primary-purple">
                    <div className="  w-[40px] h-[40px] rounded-full mr-4 flex justify-center items-center">
                      <CalenderFill className="fill-primary-yellow" />
                    </div>

                    <h3 className="title ">
                      Feb 2: Final Presentation at Scaleup Conclave
                    </h3>
                  </div>
                  <div className="p-3">
                    <ul className="list-disc px-8">
                      <li>
                        Shortlisted candidates present their products and
                        comprehensive business plans, demonstrating the
                        uniqueness and market potential of their offerings.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container py-[100px]">
        <h2 className="title text-[25px] wave-before">Examples</h2>
        <div className="grid grid-cols-12 gap-4 lg:gap-x-8">
          <div className=" col-span-12 lg:col-span-4 bg-white  shadow-md hover:shadow-xl border-[1px] rounded-lg">
            <div className="w-full py-2 px-4 flex items-center border-b-[1px] border-primary-purple">
              <div className="bg-primary-purple  w-[40px] h-[40px] rounded-full mr-4 flex justify-center items-center">
                <span className="text-white font-bold"> 1</span>
              </div>

              <h3 className="title ">Chai Masala Kits </h3>
            </div>
            <div className="p-3">
              DIY chai masala kits containing handpicked spices, allowing
              customers to brew their perfect cup of spiced tea at home.
            </div>
          </div>

          <div className=" col-span-12  lg:col-span-4 bg-white  shadow-md hover:shadow-xl border-[1px] rounded-lg">
            <div className="w-full py-2 px-4 flex items-center border-b-[1px] border-primary-blue">
              <div className="bg-primary-blue  w-[40px] h-[40px] rounded-full mr-4 flex justify-center items-center">
                <span className="text-white font-bold">2</span>
              </div>

              <h3 className="title ">Instant Healthy Mixes </h3>
            </div>
            <div className="p-3">
              Quick and nutritious instant mixes for traditional Indian
              breakfast options like dosas, idlis, or upma, catering to the
              demand for easy and wholesome meals
            </div>
          </div>
          <div className=" col-span-12  lg:col-span-4 bg-white  shadow-md hover:shadow-xl border-[1px] rounded-lg">
            <div className="w-full py-2 px-4 flex items-center border-b-[1px] border-primary-blue">
              <div className="bg-primary-blue  w-[40px] h-[40px] rounded-full mr-4 flex justify-center items-center">
                <span className="text-white font-bold">2</span>
              </div>

              <h3 className="title ">Homestyle Spice Blends </h3>
            </div>
            <div className="p-3">
              Homestyle spice blends represent regional Indian flavours, making
              it easy for customers to add authentic tastes to their daily
              meals.
            </div>
          </div>
        </div>
      </div>
      <Footer hideFloatingBtn={false} />
    </>
  );
};

export default Coockathon;
