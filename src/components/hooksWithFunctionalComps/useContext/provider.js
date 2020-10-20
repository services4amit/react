import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import context from "./context";
import MyContextCompChild from "./child";

const MyContextComp = () => {
  const [provider, setProvider] = useState("default");
  const  [name, setName] = useState("sreeja")
  const handleChange = () => {
    let random = Math.random();
    setProvider(random);
  };
  return (
    <div>
      <h1>Provider Component</h1>
      <context.Provider value={provider}>
        <MyContextCompChild />
      </context.Provider>
      <button onClick={handleChange}>Change</button>
      <NavLink to="/reducer">
        move to reducer
      </NavLink>
    </div>
  );
};

export default MyContextComp;
