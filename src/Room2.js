import "./styles.css";
import React, { useState } from "react";
import Room3 from "./Room3.js";
export default function Room2() {
  let [isButtonPressed, setButtonPressed] = useState(false);
  let Room2;
  if (isButtonPressed === false){
    Room2 = <div><h1>Welcome to Room 2</h1><button>button</button><button>button</button>
      <button onClick={() => handleClick()}>button {isButtonPressed}</button><button>button</button>
      <button>button</button><button>button</button></div>
  }else{
    Room2 = <Room3/>;
  }
  let handleClick = () => {
    setButtonPressed(true);
  };

  return (
    <div className="Room2">
      {Room2}
      <h2> </h2>
    </div>
  );

}