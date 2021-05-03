import "./styles.css";
import Room from "./Room.js";
import React, { useState } from "react";

export default function App() {
  let displeyroom = <Room />;
  let [isButtonPressed, setButtonPressed] = useState(false);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Room />
    </div>
  );
}
