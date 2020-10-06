import React, { Component, PureComponent } from "react";
import MyCompContxt from "../context/MyCompContxt";

class PrintContextName extends Component {
  // static contextType = MyCompContxt;
  render() {
    return (
      <div>
        {/* <p>Welcome PrintName {this.context}</p> */}
        <MyCompContxt.Consumer>
          {(value) => {
            return <p>THIS is it {value}</p>;
          }}
        </MyCompContxt.Consumer>
      </div>
    );
  }
}

export default PrintContextName;
