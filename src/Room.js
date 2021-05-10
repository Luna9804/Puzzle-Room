import "./styles.css";
import React, { useState } from "react";
import Room2 from "./Room2.js";

export default function Room() {
  // TODO: Create state "isButtonPressed".
  // let [ isAnswered, setIsAnswered ] = useState(false);
  let [isButtonPressed, setButtonPressed] = useState(false);
  let Room1;
  if (isButtonPressed === false){
    Room1 = <div><h1>R1</h1><button onClick={() => handleClick()}>button: {isButtonPressed}</button></div>
  }else{
    Room1 = <Room2/>;
  }
  let handleClick = () => {
    console.log("Test");
    setButtonPressed(true);
  };

  return (
    <div className="Room">
      {Room1}
      <h2> </h2>
    </div>
  );

}
