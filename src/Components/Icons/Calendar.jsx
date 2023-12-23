import React from "react";

const Calendar = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 42 42"
      {...props}
    >
      <path
        d="M1.75 5.25V12.25H40.25V5.25H1.75ZM31.5 3.5H42V42H0V3.5H10.5V0H12.25V3.5H29.75V0H31.5V3.5ZM40.25 40.25V14H1.75V40.25H40.25ZM40.25 12.25V5.25H31.5V8.75H29.75V5.25H12.25V8.75H10.5V5.25H1.75V12.25H40.25Z"
      />
    </svg>
  );
};

export default Calendar;
