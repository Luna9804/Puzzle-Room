import "./styles.css";
import React, { useState } from "react";
import Room5 from "./Room5.js";
export default function Room4() {
  let [isCorrectAnswer, setCorrectAnswer] = useState(false);
  let Room4;
  let answer = "codenation";
  
  if (isCorrectAnswer === false) {
    Room4 = (
      <div>
        <h1> Welcome to Room 4</h1>
        <h2>Enter the correct word</h2>
        <input type="text" id="Response"></input>
        <button onClick={() => handleClick()}>Enter</button>
        <p style={{color : 'Green'}}>codenation</p>
      </div>
    );
  } else {
    Room4 = <Room5 />;
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

  return <div className="Room4">{Room4}</div>;

}

