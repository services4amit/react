import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";

import reducer from "./reducer";

const App = () => {
  const [state1, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      <button
        onClick={() =>
          dispatch({
            type: "Increment",
          })
        }
      >
        Increment
      </button>
      <h1>UseReducer Count: {state1}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "Decrement",
          })
        }
      >
        Decrement
      </button>
      <NavLink to="/suspense">
        move to suspense
      </NavLink>
    </div>
  );
};

export default App;
