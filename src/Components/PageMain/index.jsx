import React from "react";
import Style from "./pagemain.module.scss";
import Image from "next/image";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const PageMain = ({
  main = {},
  title,
  introduction,
  introductionImages = {},
  overlay,
  mainRender = () => {},
}) => {
  return (
    <>
      <div
        className={`${Style["page-main-container"]} relative h-screen`}
        style={main.style}
      >
        {overlay && (
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000068]"></div>
        )}
        <div className="row h-full w-full mx-auto">
          <div className="w-full h-full flex justify-center items-center">
            <h1 className={`${Style["page-main-title"]} z-[100] text-white`}>
              {title}
            </h1>
          </div>
        </div>
        {mainRender()}
      </div>

      {Object.keys(introductionImages).length > 0 && (
        <div className="custom-container ">
          <div className="grid grid-cols-1 lg:grid-cols-2 py-10 gap-x-12">
            <div className="" {...introductionImages.container}>
              {Object.keys(introductionImages).map((key, index) => (
                <>
                  {key === "images" &&
                    introductionImages[key].map((props, propindex) => (
                      <Image {...props} key={propindex} />
                    ))}
                  {key === "videos" &&
                    introductionImages[key].map((props, propindex) => (
                      <div
                        className="flex justify-center items-center gap-x-4  h-[300px] w-full rounded-lg overflow-hidden"
                        key={propindex}
                      >
                        <ReactPlayer
                          url="https://youtu.be/jXpYAYwjOvM?si=_GmVzd4o8yXJhdoR"
                          height={"100%"}
                          width={"100%"}
                        />
                      </div>
                    ))}
                </>
              ))}
            </div>
            <div className={" py-5"} {...introduction.container}>
              {introduction.content.map(({ text, ...rest }, index) => (
                <div key={index}>
                  <p {...rest}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PageMain;
