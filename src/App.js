import "./styles.css";
import Room from "./Room.js";
import React, { useState } from "react";

export default function App() {
  let displeyroom = <Room />;
  let [isButtonPressed, setButtonPressed] = useState(false);

  return (
    <div className="App">
      <h1>Puzzle Room</h1>
      <h3>Complete the challenge to move on to the next room</h3>
      <Room />
    </div>
  );
}
