import React, { useState } from "react";
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";

const Assignment2 = (props) => {
  const [inputText, setInputText] = useState("");

  const onInputChange = (event) => {
    setInputText(event.target.value);
  };

  const inputTextArr = () => {
    return inputText.split("");
  };

  const deleteCharHandler = (index) => {
    const newTextArr = [...inputTextArr()];
    newTextArr.splice(index, 1);
    setInputText(newTextArr.join(""));
  };

  return (
    <div>
      <input type="text" onChange={onInputChange} value={inputText} />
      <ValidationComponent inputText={inputText} />
      <div>
        {inputTextArr().map((Value, key) => {
          return (
            <CharComponent
              key={key}
              charValue={Value}
              deleteChar={() => deleteCharHandler(key)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Assignment2;
