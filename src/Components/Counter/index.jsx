"use client";
import React, { useState, useEffect } from "react";
import Styles from "./counter.module.scss";
const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();

    if (difference > 0) {
      const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
      const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 7);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { weeks, days, hours, minutes, seconds };
    }
    return { weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { weeks, days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="grid grid-cols-4  gap-x-2">
      {/* <div className={Styles["counter"]}>
        {weeks}
        <div className={Styles["label"]}>Weeks</div>
      </div> */}
      <div className={Styles["counter"]}>
        {days}
        <div className={Styles["label"]}> Days</div>
      </div>
      <div className={Styles["counter"]}>
        {hours}
        <div className={Styles["label"]}>Hours</div>
      </div>
      <div className={Styles["counter"]}>
        {minutes}
        <div className={Styles["label"]}>Minutes</div>
      </div>
      <div className={`${Styles["counter"]} `}>
        {seconds}
        <div className={Styles["label"]}>Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
