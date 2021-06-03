import "./styles.css";
import React, { useState } from "react"
export default function Room6() {let [isCorrectAnswer, setCorrectAnswer] = useState(false);
  let Room6;
  let answer = "silence";
  if (isCorrectAnswer === false) {
    Room6= (
      <div>
        <h1> Welcome to Room 6, the last room</h1>
        <h2> What is broken, every time it's spoken? </h2>
        <input type="text" id="Response"></input>
        <br/> 
        <button>Enter</button> <button>Enter</button><button>Enter</button>
        <button>Enter</button><button>Enter</button>
        <button>Enter</button><button>Enter</button>
        <button onClick={() => handleClick()}>Enter</button>
        <button>Enter</button><button>Enter</button><button>Enter</button>
        <button>Enter</button><button>Enter</button><button>Enter</button>
        <button>Enter</button><button>Enter</button><button>Enter</button>
        <button>Enter</button><button>Enter</button><button>Enter</button>
        <br/>
      </div>
    );
  } else {
    Room6 = <div><h1>Congrats on finishing the puzzle</h1></div>;
  }
  let handleClick = () => {
    let response = document.getElementById("Response").value;
    // setButtonPressed(true);
    console.log(response);
    if(response.toLowerCase() === answer){
      setCorrectAnswer(true);
    }else{
      document.getElementById("Response").value = "";
    }

  };

  return <div className="Room6">{Room6}</div>;

}
 