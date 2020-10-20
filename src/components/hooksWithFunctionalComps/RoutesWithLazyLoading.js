import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

// import Reducer from "./UseReducerHook/useReducer";
// import Context from "./useContext/provider";
// import LazyLoad from "./lazyLoading/lazyLoad"
// import Recaptcha from "./useRefWithInvRecaptcha/recaptcha"
// import CallbackMemo from "./useCallbackUseMemo/callbackMemo"
// import ImperativeModel from "./useImperativeModelHook/imperativemodel"

const Recaptcha = lazy(() => import("./useRefWithInvRecaptcha/recaptcha"));
const Reducer = lazy(() => import("./UseReducerHook/useReducer"));
const CallbackMemo = lazy(() => import("./useCallbackUseMemo/callbackMemo"));
const ImperativeModel = lazy(() => import("./useImperativeModelHook/imperativemodel"));
const Context = lazy(() => import("./useContext/provider"));
const LazyLoad = lazy(() => import("./lazyLoading/lazyLoad"));

const Routes = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route component={Recaptcha} exact path="/recaptcha" />
        <Route component={Reducer} exact path="/reducer" />
        <Route component={LazyLoad} exact path="/lazy"/>
        <Route component={Context} exact path="/context" />
        <Route component={CallbackMemo} exact path="/callbackMemo"/>
        <Route component={ImperativeModel} exact path="/imperativemodel"/>
      </Switch>
    </Suspense>
  );
};

export default Routes;
