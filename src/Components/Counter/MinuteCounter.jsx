import React, { useState, useEffect } from "react";

const MinuteCounter = ({ onStart, onEnd, second }) => {
  const [seconds, setSeconds] = useState(second);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        onStart();
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else onEnd();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <div>
      <h1>{seconds} seconds left</h1>
    </div>
  );
};

export default MinuteCounter;
