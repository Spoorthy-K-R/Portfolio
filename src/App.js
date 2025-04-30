// import logo from './assets/images/woman-with-laptop.webp';
import './App.css';
import * as React from 'react';
import LinearBuffer from './components/Loader.js';
import Main from "./containers/Main";

function App() {
  return (
    <div className="App">
      <LinearBuffer/>
      <Main/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi!!
          Welcome to my website ;)
        </p>
          Coming soon...
      </header> */}
    </div>
  );
}

export default App;
