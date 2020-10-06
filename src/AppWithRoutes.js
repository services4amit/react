import React, { Component } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import MyComp from "./components/componentBasics/MyComp";
import JSXExample from "./components/jsx/JSXExample";
import MyFuncComp from "./components/componentBasics/FunComponent";
import MyCompState from "./components/componentBasics/ClassComponent";
import EventHandling from "./components/componentBasics/EventHandling";
import LifeCycleEx from "./components/lifecycle/LifeCycleEx";
import ServiceCallEx from "./components/serviceCall/ServiceCallEx";
import StylesEx from "./components/styles/StylesEx";
import MaterialUIEx from "./components/styles/MaterialUIEx";
import StatefullComponent from "./components/componentBasics/StatefullComponent";
import Parent from "./components/redux/calling/GrandParent";
import MyContextComp from "./components/contextComp/MyContextComp";
import PrintContextName from "./components/contextComp/PrintContextName";
import AppHooks from './components/hooks/App'
import LifeCycleExHooks from './components/hooks/LifeCycleExHooks'
class AppWithRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route component={AppHooks} exact path="/apphooks" />
        <Route component={LifeCycleExHooks} exact path="/lifehooks" />
        <Route component={MyContextComp} exact path="/contextmy" />
        <Route component={PrintContextName} exact path="/contextprint" />
        <Route component={MyComp} exact path="/myComp" />

        <Route component={Parent} exact path="/dataFlow" />
        <Route
          component={StatefullComponent}
          exact
          path="/statefullComponent"
        />

        <Route component={JSXExample} exact path="/jsxex" />
        <Route component={MyFuncComp} exact path="/myFunComp" />
        <Route component={MyCompState} exact path="/myCompState" />
        <Route component={EventHandling} exact path="/eventHandle" />
        <Route component={LifeCycleEx} exact path="/lifeCycle" />
        <Route component={ServiceCallEx} exact path="/serviceCallEx" />
        <Route component={StylesEx} exact path="/stylesEx" />
        <Route component={MaterialUIEx} exact path="/materialUIEx" />
      </Switch>
    );
  }
}

export default AppWithRoutes;
