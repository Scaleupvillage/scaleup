import React, { Fragment } from "react";

const Scribbles = ({ scribbles }) => {
  return scribbles.map((scrible, index) => (
    <Fragment key={index}>{scrible.component}</Fragment>
  ));
};

export default Scribbles;
