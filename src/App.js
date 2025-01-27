// import logo from './logo.svg';
import logo from './woman-with-laptop.webp';
import './App.css';
import * as React from 'react';
import LinearBuffer from './components/Loader.js';

function App() {
  return (
    <div className="App">
      <LinearBuffer/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi!!
          Welcome to my website ;)
        </p>
          Coming soon...
      </header>
    </div>
  );
}

export default App;
