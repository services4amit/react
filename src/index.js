import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppWithRoutes from './AppWithRoutes'
import AppRouterEx from './AppRouterEx'
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const browserHistory = createBrowserHistory();

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')

// );


// ReactDOM.render(
//   <Router history={browserHistory}>
//     <AppWithRoutes></AppWithRoutes>
//   </Router>
//   ,
//   document.getElementById('root')

// );





ReactDOM.render(
  <Router history={browserHistory}>
    <AppRouterEx></AppRouterEx>
  </Router>,
  document.getElementById('root')

);






const element = React.createElement('h1', null, 'hello world')
//Rendering the element is decided by ReactDOM
// There will be diff rendering process for browser, native devices ,VR environments
//ex: React VR, React native , electron etc ...
console.log(element)
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   <h1>
//    hello world!!
//    </h1>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
