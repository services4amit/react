import React, { useState } from "react";
import MyCompContxt from "./context";
import LastComp from "./lastComponent"

const PrintContextName = () => {
  return (
    <div>
      <MyCompContxt.Consumer>
        {(value) => {
          return <h2>Consumer component, value is {value}</h2>;
        }}
      </MyCompContxt.Consumer>
      <LastComp />
    </div>
  );
};

export default PrintContextName;
