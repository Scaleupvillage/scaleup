import React from "react";
import Style from "./pagemain.module.scss";
import Image from "next/image";
const PageMain = ({
  main = {},
  title,
  introduction,
  introductionImages = {},
  mainRender = () => {},
}) => {
  return (
    <>
      <div className={`${Style["page-main-container"]} relative`} style={main.style}>
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000031]"></div>
        <div className="row h-full w-full mx-auto">
          <div className="w-full h-full flex justify-center items-center">
            <h1 className={`${Style["page-main-title"]} z-[100]`}>{title}</h1>
          </div>
        </div>
        {mainRender()}
      </div>

      {introduction.length > 0 && (
        <div className="custom-container ">
          <div className="grid grid-cols-12 py-10">
            <div className="col-span-6 ">
              {introductionImages.images &&
                introductionImages.images.length > 0 && (
                  <div className={introductionImages?.containerClassname}>
                    {introductionImages.images.map((image, index) => (
                      <Image {...image} key={index} />
                    ))}
                  </div>
                )}
            </div>
            <div className="col-span-6 py-5">
              {introduction.map(({ text, ...rest }, index) => (
                <div className="row" key={index}>
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
