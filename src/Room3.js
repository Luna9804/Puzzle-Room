import "./styles.css";
import React, { useState } from "react";
import Room4 from "./Room4.js";
export default function Room3() {
  let [isCorrectAnswer, setCorrectAnswer] = useState(false);
  let Room3;
  let answer = "true";
  if (isCorrectAnswer === false) {
    Room3 = (
      <div>
        <h1> Welcome to Room 3</h1>
        <h2> Is null an object in javascript?</h2>
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
    if(response.toLowerCase() === answer){
      setCorrectAnswer(true);
    }else{
      document.getElementById("Response").value = "";
    }

  };

  return <div className="Room3">{Room3}</div>;

}