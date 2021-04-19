import "./styles.css";
import React from "react";

export default class Room extends React.Component {
handleClick(){
console.log("Test");
}
  render() {
    return (
      <div className="Room">
        <h1>R1</h1>

        <button onClick = {this.handleClick()}> button</button>
        <h2> </h2>
      </div>
    );
  }
}
