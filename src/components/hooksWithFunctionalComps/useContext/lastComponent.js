import React from "react";
import MyCompContxt from "./context";

const PrintContextName = () => {
  return (
    <div>
      <MyCompContxt.Consumer>
        {(name) => {
          return <h2>Last component, value is {name}</h2>;
        }}
      </MyCompContxt.Consumer>
    </div>
  );
};

export default PrintContextName;
