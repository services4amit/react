import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import MyComp from './components/componentBasics/MyComp'
import JSXExample from './components/jsx/JSXExample'
import MyFuncComp from './components/componentBasics/FunComponent'
import MyCompState from './components/componentBasics/ClassComponent'
import EventHandling from './components/componentBasics/EventHandling'
import LifeCycleEx from './components/lifecycle/LifeCycleEx'
import ServiceCallEx from './components/serviceCall/ServiceCallEx'
import StylesEx from './components/styles/StylesEx'
import MaterialUIEx from './components/styles/MaterialUIEx'

class AppWithRoutes extends Component {


    render() {

        return (
            <Switch>

                

                    <Route
                        component={MyComp}
                        exact
                        path="/myComp"
                    />

                    <Route
                        component={JSXExample}
                        exact
                        path="/jsxex"
                    />
                    <Route
                        component={MyFuncComp}
                        exact
                        path="/myFunComp"
                    />
                    <Route
                        component={MyCompState}
                        exact
                        path="/myCompState"
                    />
                    <Route
                        component={EventHandling}
                        exact
                        path="/eventHandle"
                    />
                    <Route
                        component={LifeCycleEx}
                        exact
                        path="/lifeCycle"
                    />
                    <Route
                        component={ServiceCallEx}
                        exact
                        path="/serviceCallEx"
                    />
                    <Route
                        component={StylesEx}
                        exact
                        path="/stylesEx"
                    />
                    <Route
                        component={MaterialUIEx}
                        exact
                        path="/materialUIEx"
                    />


                
            </Switch>
        )
    };


}

export default AppWithRoutes;
