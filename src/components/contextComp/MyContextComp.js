import React, { Component } from "react";
import PrintName from "./PrintContextName";
import MyContextCompChild from "./MyContextCompChild";
import MyCompContxt from "../context/MyCompContxt";
const msg = "Hi React...";
class MyContextComp extends Component {
  static contextType = MyCompContxt;

  state = {
    provider: "default",
  };
  handleChange = () => {
    let random = Math.random();
    this.setState({
      provider: random,
    });
  };
  render() {
    return (
      <div>
        <h1>My Component</h1>
        <MyCompContxt.Provider value={this.state.provider}>
          <MyContextCompChild></MyContextCompChild>
        </MyCompContxt.Provider>
        <button onClick={this.handleChange}>Change</button>
      </div>
    );
  }
}

export default MyContextComp;
