import "./styles.css";
import React, { useState } from "react";
import Room3 from "./Room3.js";
export default function Room2() {
  let [isButtonPressed, setButtonPressed] = useState(false);
  let Room2;
  if (isButtonPressed === false) {
    Room2 = (
      <div>
        <h1> Room2</h1>
        <h1> Trivia question</h1>
        <input type="text" id="Response"></input>
        <button onClick={() => handleClick()}>Enter</button>
      </div>
    );
  } else {
    Room2 = <Room3 />;
  }
  let handleClick = () => {
    let response = document.getElementById("Response").value;
    // setButtonPressed(true);
    console.log(response);
  };

  return <div className="Room2">{Room2}</div>;
}