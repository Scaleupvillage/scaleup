import PageMain from "@/Components/PageMain";
import React, { useEffect, useState } from "react";
import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";
import Slider from "@/Components/Slider";
import { useRouter } from "next/router";
import { hilightedEvent } from "@/constants/events";

const Highlighted = () => {
  const { key } = useRouter().query;
  const [program, setProgram] = useState({});
  useEffect(() => {
    setProgram(hilightedEvent[key]);
  }, [key]);

  return (
    <>
      <Navbar />
      {program && Object.keys(program).length > 0 && (
        <PageMain
          title={program.title}
          introduction={program.introduction}
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
              backgroundImage: `url(${program.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "50%",
              height: "450px",
            },
          }}
        />
      )}
      <Footer hideFloatingBtn={false} />
    </>
  );
};

export default Highlighted;
