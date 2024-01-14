import Footer from "@/Components/Layout/Footer";
import Navbar from "@/Components/Layout/Navbar";
import PageMain from "@/Components/PageMain";
import React from "react";
import coockathon from "@/assets/images/coockathon.jpg";
import Question from "@/Components/Icons/Question";
import Scale from "@/Components/Icons/Scale";
import CalenderFill from "@/Components/Icons/CalenderFill";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import Link from "next/link";
const Coockathon = () => {
  return (
    <>
      <Navbar isAbsolute={false} />
      <PageMain
        title={"Cookathon"}
        overlay={true}
        introduction={{
          container: {
            // className: "col-span-12 lg:col-span-6",
          },
          content: [
            {
              text: "Cookathon, an innovative food innovation challenge brought to you by Scaleup Village, invites all passionate food entrepreneurs to showcase their creativity and bring innovative, market-ready products to the forefront of the Direct-to-Consumer (D2C) market.",
            },
          ],
        }}
        introductionImages={{
          container: {
            // className: "col-span-12 lg:col-span-6",
          },

          videos: [
            {
              url: "https://www.youtube.com/watch?v=Zz5Z3Xs2PNs",
              alt: "",
              width: "100%",
              height: "100%",
            },
          ],
        }}
        main={{
          style: {
            backgroundImage: `url(${coockathon.src})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "50%",
          },
        }}
      />
      <div className="flex justify-center items-center py-5 gap-x-4 flex-col lg:flex-row">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdLjc1DNLqvukhdqWeN1kV6ouYoXeDrqWHYZF997uBfs-3YxQ/viewform?usp=sf_link"
          className="bg-primary-purple shadow-lg shadow-primary-purple px-8 py-3 rounded-full text-white mb-4 lg:mb-0"
        >
          Register Now For Cookathon
        </Link>
        <Link
          href="https://chat.whatsapp.com/CVSxNUUyZeP9pgFaZLhegr"
          target="_blank"
          className="bg-[#25D366] shadow-lg shadow-[#25D366] px-8 py-3 rounded-full text-white"
        >
          WhatsApp Discussion Group
        </Link>
      </div>

      <div className="custom-container py-[50px]">
        <h2 className="title text-[25px] wave-before">
          What is D2C (Direct-to-Consumer)?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="mb-4 lg:mb-0">
            <p>
              Direct-to-Consumer (D2C) is a business model that involves selling
              products directly to customers without the need for intermediaries
              like retailers or wholesalers. In simpler terms, it&apos;s a
              direct link between the producer and the end consumer. This model
              cuts out the middle steps, allowing businesses to connect with
              their audience more intimately.Read this article to learn more
              about Indian D2C Startup Ecosystem
              https://inc42.com/features/fb-d2c-brands-in-india/
            </p>
          </div>
          <div className="flex justify-center items-center gap-x-4  h-[300px] w-full rounded-lg overflow-hidden">
            <ReactPlayer
              url="https://youtu.be/Zz5Z3Xs2PNs"
              height={"100%"}
              width={"100%"}
            />
          </div>
        </div>
      </div>
      <div className="custom-container py-[50px]">
        <h2 className="title text-[25px] wave-before">Advantages of D2C</h2>
        <div className="">
          <div className="mb-4 lg:mb-0">
            <ul className="list-decimal px-8">
              <li className="mb-4">
                <span className="title"> Direct Relationship:</span> D2C allows
                brands to build a direct and personal relationship with their
                customers. For instance, a local artisanal jam maker can
                interact directly with jam enthusiasts through online platforms,
                understanding preferences and gaining valuable insights.
              </li>
              <li className="mb-4">
                <span className="title"> Brand Control:</span>With D2C,
                businesses have better control over their brand image and
                messaging. An example would be a small tea company that crafts
                unique blends and communicates directly with tea lovers,
                emphasising the authenticity of their products.
              </li>
              <li className="mb-4">
                <span className="title">Real-time Feedback:</span>Direct
                communication channels foster real-time feedback loops. A D2C
                skincare brand, for instance, can receive immediate responses
                from users, helping them tweak formulations or launch new
                products based on customer suggestions.
              </li>
              <li className="mb-4">
                <span className="title"> Adaptability to Trends:</span> D2C
                enables businesses to adapt swiftly to market trends. Consider a
                health-conscious snack producer introducing a new superfood
                blend directly to consumers, responding rapidly to the rising
                demand for nutritious snacks.
              </li>
              <li className="mb-4">
                <span className="title"> Cutting Costs</span> Skipping
                intermediaries often reduces costs.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="custom-container py-[50px]">
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

                    <h3 className="title ">JAN 14: Official Announcement</h3>
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
                      Jan 27: Last date for registration
                    </h3>
                  </div>
                  <div className="p-3">
                    <ul className="list-disc px-8">
                      <li>
                        Participants need to fill registration form before JAN
                        27,11:59 PM
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
                      Jan 29: Preliminary Screening at Perinthalmanna
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

      <Footer hideFloatingBtn={false} />
    </>
  );
};

export default Coockathon;
