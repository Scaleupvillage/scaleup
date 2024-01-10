import React from "react";

const CheckCircle = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      fill="none"
      {...props}
    >
      <path
        d="M44.6597 20.2129L27.7561 37.2129L21.6597 30.6962"
        stroke="#209625"
        strokeWidth="3.61702"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="33.1597"
        cy="28.7129"
        r="20.6915"
        stroke="#209625"
        strokeWidth="3.61702"
      />
    </svg>
  );
};

export default CheckCircle;
