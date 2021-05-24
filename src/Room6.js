import "./styles.css";
import React, { useState } from "react"
export default function Room6() {let [isCorrectAnswer, setCorrectAnswer] = useState(false);
  let Room6;
  let answer = "true";
  if (isCorrectAnswer === false) {
    Room6= (
      <div>
        <h1> Welcome to Room 6</h1>
        <h2> Is null an object in javascript?</h2>
        <input type="text" id="Response"></input>
        <button onClick={() => handleClick()}>Enter</button>
      
      </div>
    );
  } else {
    Room6 = <div><h1>Congrats on finishing the puzzle</h1></div>;
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

  return <div className="Room6">{Room6}</div>;

}
 