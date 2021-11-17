import React from "react";
import utils from "./math-utils";

const StarsDisplay = (props) => {
  return (
    <>
      {utils.range(1, props.count).map((starId) => (
        <div className="star" key={starId} />
      ))}
    </>
  );
};

export default StarsDisplay;
