import React, { Component, PureComponent } from "react";
import PrintName from "./PrintContextName";

const msg = "Hi React...";
class MyContextCompChild extends PureComponent {
  render() {
    console.log("MyContextCompChild render");
    return (
      <div>
        <h1>My MyContextCompChild</h1>
        <PrintName></PrintName>
      </div>
    );
  }
}

export default MyContextCompChild;
