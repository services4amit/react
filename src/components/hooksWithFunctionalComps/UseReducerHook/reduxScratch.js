import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const App = () => {
  const state1 = useSelector((state) => state);
  const dispatch = useDispatch();

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
      <h1>Redux from Scratch Count: {state1}</h1>
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
