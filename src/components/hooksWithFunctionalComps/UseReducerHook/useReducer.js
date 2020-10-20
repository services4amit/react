import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import reducer from "./reducer";

const App = () => {
  // const state1 = useSelector((state) => state);
  // const dispatch = useDispatch();
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
      <h1>Count: {state1}</h1>
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
