import React, { Component, lazy, Suspense } from 'react';

import { Switch, Route, Redirect, Link, NavLink } from 'react-router-dom';
// import MyComp from './components/MyComp'

import Home from './components/routeEx/Home'
import About from './components/routeEx/About'
import Topics from './components/routeEx/Topics'
// import ErrorBoundary from './components/ErrorBoundary'
// import MyDetails from './components/redux/reduxComp/MyDetails'
// import MyDetailsRed from './components/redux/reduxComp/MyDetailsRed'


class AppRouterEx extends Component {


    render() {

        return (
            <div>




                {/* <Route
                    path="/"
                    component={Home}
                ></Route>
                <Route
                    path="/about"
                    component={About}
                ></Route>
                <Route
                    path="/topics"
                    component={Topics}
                ></Route> */}





                {/* <Switch>
                    <Route
                        path="/about"
                        component={About}
                    ></Route>
                    <Route
                        path="/topics"
                        component={Topics}
                    ></Route>
                    <Route
                        path="/"
                        component={Home}
                    ></Route>

                    

                </Switch> */}

                {/* <Switch>
                    <Route
                        exact
                        path="/home"
                        component={Home}
                    ></Route>
                    <Route
                        exact
                        path="/about"
                        component={About}
                    ></Route>
                    <Route
                        exact
                        path="/topics"
                        component={Topics}
                    ></Route>
                    <Redirect to="/home" />
                </Switch> */}




                {/* <nav>
                    <Link
                        to="/"
                    >Home</Link>


                    <br></br>
                    <Link
                        to="/about"
                    >About</Link>
                    <br></br>
                    <Link
                        to="/topics"
                    >Topics</Link>
                </nav> */}

                <nav>
                    <NavLink
                        activeStyle={{
                            background: 'red',
                            color: 'white'
                        }}
                        to="/home"
                    >Home</NavLink>
                    <br></br>
                    <NavLink
                        activeStyle={{
                            background: 'red',
                            color: 'white'
                        }}
                        to="/about"
                    >About</NavLink>
                    <br></br>
                    <NavLink
                        activeStyle={{
                            background: 'red',
                            color: 'white'
                        }}
                        to="/topics"
                    >Topics</NavLink>
                </nav>











            </div>
        )
    };


}

export default AppRouterEx;




{

    /*
    <Route
                    path="/"
                    component={Home}
                ></Route>
                <Route
                    path="/about"
                    component={About}
                ></Route>
                <Route
                    path="/topics"
                    component={Topics}
                ></Route>
    




<Switch>
                    <Route
                        path="/"
                        component={Home}
                    ></Route>
                    <Route
                        path="/about"
                        component={About}
                    ></Route>
                    <Route
                        path="/topics"
                        component={Topics}
                    ></Route>

                </Switch>



 <Switch>
                    <Route
                        exact
                        path="/"
                        component={Home}
                    ></Route>
                    <Route
                        exact
                        path="/about"
                        component={About}
                    ></Route>
                    <Route
                        exact
                        path="/topics"
                        component={Topics}
                    ></Route>

                </Switch>




    
    
                    */

}