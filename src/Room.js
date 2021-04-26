import "./styles.css";
import React, { useState } from "react";

export default function Room() {
  // TODO: Create state "isButtonPressed".
  // let [ isAnswered, setIsAnswered ] = useState(false);
  let [isButtonPressed, setButtonPressed] = useState(false);

  let handleClick = () => {
    console.log("Test");
  };
  return (
    <div className="Room">
      <h1>R1</h1>

      <button onClick={() => handleClick()}>button: {isButtonPressed}</button>

      <h2> </h2>
    </div>
  );
}
