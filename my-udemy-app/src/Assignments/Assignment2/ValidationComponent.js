import React from "react";

const ValidationComponent = (props) => {
  const minLength = 5;
  const maxLength = 10;

  const checkLength = (text) => {
    let result;
    if (text.length > maxLength) {
      result = "Text long enough";
    } else if (text.length < minLength && text.length > 0) {
      result = "Text too short";
    } else {
      result = "";
    }
    return result;
  };

  return (
    <div>
      <p>{checkLength(props.inputText)}</p>
    </div>
  );
};

export default ValidationComponent;

// switch (true) {
//     case (text.length > 10):
//       result = "Text long enough";
//       break;
//     case (text.length < 6):
//       result = "Text too short";
//       break;
//       case (text.length === 0
//   }
