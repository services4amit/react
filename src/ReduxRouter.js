import React, { Component, lazy, Suspense } from 'react';

import { Switch, Route, Redirect, Link, NavLink } from 'react-router-dom';

import MyDetails from './components/redux/reduxComp/MyDetails'
import MyDetailsRed from './components/redux/reduxComp/MyDetailsRed'

import PersonalDetailsRed from './components/redux/reduxHooks/PersonalDetailsRed'
import MyDetailsRedHooks from './components/redux/reduxHooks/MyDetailsRed'




class ReduxRouter extends Component {


    render() {

        return (
            <div>


                <Switch>
                    <Route component={PersonalDetailsRed} exact path="/PersonalDetailsRed" />
                    <Route component={MyDetailsRedHooks} exact path="/MyDetailsRedHooks" />

                    <Route
                        exact
                        path="/myDetails"
                        component={MyDetails}>
                    </Route>
                    <Route
                        exact
                        path="/myDetailsRed"
                        component={MyDetailsRed}>
                    </Route>

                </Switch>

            </div>
        )
    };


}

export default ReduxRouter;






