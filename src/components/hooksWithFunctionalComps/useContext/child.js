import React from "react";
import PrintName from "./consumer";

const MyContextCompChild = () => {
  return (
    <div>
      <h1>Middle Component</h1>
      <PrintName />
    </div>
  );
};

export default MyContextCompChild;
