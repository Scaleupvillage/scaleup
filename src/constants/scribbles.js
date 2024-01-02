// elemets
import Line from "@/Components/Icons/scribbles/Line";
import Arrow from "@/Components/Icons/scribbles/Arrow";
import Group3 from "@/Components/Icons/scribbles/Group3";
import Group1 from "@/Components/Icons/scribbles/Group1";
import Group2 from "@/Components/Icons/scribbles/Group";
import ArrowHead from "@/Components/Icons/scribbles/ArrowHead";
import Wave from "@/Components/Icons/scribbles/Wave";
import UpArrows from "@/Components/Icons/scribbles/UpArrows";
let scribbles = [
  {
    component: (
      <Wave
        className="absolute bottom-[13%] lg:bottom-[10%] right-[5%] z-[11] w-[100px] lg:w-[200px] opacity-50"
        fill="#00B4B8"
      />
    ),
  },
  {
    component: (
      <Wave
        className="absolute bottom-[10%] lg:bottom-[7%] right-[-1%] z-[11] w-[100px] lg:w-[200px] opacity-50"
        fill="#FFCF3F"
      />
    ),
  },
  {
    component: (
      <Group1
        className="absolute bottom-[10%] lg:bottom-[5%] left-[-1%] z-[11]  w-[100px] lg:w-[200px] opacity-50"
        fill="#FFCF3F"
      />
    ),
  },
];
let scribblesSecond = [
  {
    component: (
      <Wave
        className="absolute top-[7%] lg:top-[11%] left-[-4%]  w-[100px] lg:w-[200px]"
        fill="#CB8DF7"
      />
    ),
  },
  {
    component: (
      <Wave
        className="absolute top-[5%] lg:top-[5%] left-[5%] lg:left-[2%] w-[100px] lg:w-[200px]"
        fill="#FFCF3F"
      />
    ),
  },
];
let aboutScribble = [
  {
    component: (
      <Wave
        className="absolute top-[8%] right-[-9%] hidden lg:block"
        width="200"
        fill="#FFCF3F"
      />
    ),
  },
  {
    component: (
      <Wave
        className="absolute top-[5%] right-[-3%] hidden lg:block"
        width="200"
        fill="#00B4B8"
      />
    ),
  },
  {
    component: (
      <Group3
        className="absolute top-[3%] left-0 hidden lg:block"
        width="150"
      />
    ),
  },
];
let timerScribbles = [
  {
    component: (
      <Line
        fill="#FFCF3F"
        className="absolute top-[55%] left-0 w-[90%] h-[24px]"
        preserveAspectRatio="none"
      />
    ),
  },

  {
    component: (
      <ArrowHead fill="#FFCF3F" className="absolute top-[47%] right-[3%] " />
    ),
  },
];
let aboutSecondScribble = [
  {
    component: (
      <UpArrows className="absolute bottom-[0px] right-0 z-[1] opacity-30 2xl:opacity-100" />
    ),
  },
  {
    component: (
      <Group2
        className="absolute bottom-[5%] left-[2%] z-[1] opacity-30 hidden md:block 2xl:opacity-100"
        height="250"
      />
    ),
  },
];

export {
  aboutSecondScribble,
  timerScribbles,
  aboutScribble,
  scribblesSecond,
  scribbles,
};
