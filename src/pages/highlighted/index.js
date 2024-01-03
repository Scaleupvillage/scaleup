import PageMain from "@/Components/PageMain";
import React from "react";
import slider1 from "@/assets/images/slider1.png";
import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";
import Slider from "@/Components/Slider";

const Highlighted = () => {
  return (
    <>
      <Navbar />
      <PageMain
        title={"Header"}
        introduction={[{ text: "hideFloatingBtn" }]}
        introductionImages={{
          images: [
            {
              src: Slider,
              alt: "",
              width: "100",
            },
          ],
        }}
        main={{
          style: {
            backgroundImage: `url(${slider1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            height: "450px",
          },
        }}
      />
      <Footer />
    </>
  );
};

export default Highlighted;
