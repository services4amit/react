import React from 'react';



import Parent from './Parent'


function App() {

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>

  //     </header>
  //   </div>
  // );

  return (
    <div>
      <h1>
        React Hooks
    </h1>
      {/* <Hooks></Hooks> */}
      <Parent></Parent>
      {/* <LifeCycleEx></LifeCycleEx> */}
      {/* <LifeCycleExHooks></LifeCycleExHooks> */}
    </div>
  )
}

export default App;
