import "./styles.css";
import React, { useState } from "react";
import Room4 from "./Room4.js";
export default function Room3() {
  let [isCorrectAnswer, setCorrectAnswer] = useState(false);
  let Room3;
  let answer = "fake answer";
  if (isCorrectAnswer === false) {
    Room3 = (
      <div>
        <h1> Room3</h1>
        <h1> Trivia question</h1>
        <input type="text" id="Response"></input>
        <button onClick={() => handleClick()}>Enter</button>
      </div>
    );
  } else {
    Room3 = <Room4 />;
  }
  let handleClick = () => {
    let response = document.getElementById("Response").value;
    // setButtonPressed(true);
    if(response === answer){
      setCorrectAnswer(true);
    }
        console.log(response);
  };

  return <div className="Room3">{Room3}</div>;

}