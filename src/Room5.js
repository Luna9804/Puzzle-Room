import "./styles.css";
import React, { useState } from "react";
import Room6 from "./Room6.js";
export default function Room5() {
  let [isButtonPressed, setButtonPressed] = useState(false);
  let Room5;
  if (isButtonPressed === false){
    Room5 = <div><h1>Welcome to Room 5</h1><button>button</button><button>button</button>
    <button>button</button><button>button</button><button>button</button><button>button</button><button>button</button>
      <button onClick={() => handleClick()}>button {isButtonPressed}</button><button>button</button>
      <button>button</button><button>button</button><button>button</button>
      <button>button</button><button>button</button><button>button</button>
      </div>;
  }else{
    Room5 = <Room6/>;
  }
  let handleClick = () => {
    setButtonPressed(true);
  };

  return (
    <div className="Room5">
      {Room5}
      <h2> </h2>
    </div>
  );
  

}