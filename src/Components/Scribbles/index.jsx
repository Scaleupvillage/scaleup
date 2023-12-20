import React from "react";

const Scribbles = ({ scribbles }) => {
  return scribbles.map((scrible) => <>{scrible.component}</>);
};

export default Scribbles;
