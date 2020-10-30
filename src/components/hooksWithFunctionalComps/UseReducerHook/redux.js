import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./reducer";
import UseReducer from "./useReducer";
import ReduxScratch from "./reduxScratch";

const store = createStore(reducer);

const Redux = () => {
  return (
    <Provider store={store}>
      <UseReducer />
      <hr></hr>
      <ReduxScratch />
    </Provider>
  );
};

export default Redux;
