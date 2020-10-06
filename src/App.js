import React from 'react';
import logo from './logo.svg';
import './App.css';


// class App extends React.Component {
//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//         </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//         </a>
//         </header>
//       </div>
//     );
//   }
// }




//babel is used to understand ES6 codes 
//https://babeljs.io/

//jsx code can be compliled with webpack
//create react app gives all the set up
class App extends React.Component {
  render() {
//First example
    return (
      <div>
        <h1>Hello World</h1>
        <h1>Hello guys</h1>
      </div>

    );
  }
}

export default App;
