import React from "react";

const Scale = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="inherit"
        d="m15.81 10l-2.5-5H14a.5.5 0 0 0 0-1h-.79a6.04 6.04 0 0 0-4.198-1.95L9 2a1 1 0 0 0-2 0v.05a6.168 6.168 0 0 0-4.247 1.947L2 4a.5.5 0 0 0 0 1h.69l-2.5 5H0c0 1.1 1.34 2 3 2s3-.9 3-2h-.19L3.26 4.91a.525.525 0 0 0 .159-.148A4.842 4.842 0 0 1 6.994 3.06L7 14H6v1H4v1h8v-1h-2v-1H9V3.06a4.71 4.71 0 0 1 3.524 1.693a.519.519 0 0 0 .193.186L10.19 10H10c0 1.1 1.34 2 3 2s3-.9 3-2zM5 10H1l2-3.94zm6 0l2-3.94L15 10z"
      />
    </svg>
  );
};

export default Scale;
