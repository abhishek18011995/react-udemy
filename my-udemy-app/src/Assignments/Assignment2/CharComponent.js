import React from "react";

const CharComponent = (props) => {
  const style = {
    width: "30px",
    display: "inline-block",
    padding: "7px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
  };

  return (
    <div style={style} onClick={props.deleteChar}>
      {props.charValue}
    </div>
  );
};

export default CharComponent;
