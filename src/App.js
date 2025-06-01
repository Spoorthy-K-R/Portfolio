// import logo from './assets/images/woman-with-laptop.webp';
import './App.css';
import * as React from 'react';
import LinearBuffer from './components/Loader.js';
import Main from "./containers/Main";
import {socialMediaLinks} from "./components/portfolio";

function App() {
  return (
    <div className="App">
      {/* <LinearBuffer/> */}

      <div className="fixed-side left">
        <div className="fixed-side-content">
          {socialMediaLinks.linkedin ? (
            <a
              href={socialMediaLinks.linkedin}
              className="icon-button linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
              <span></span>
            </a>
          ) : null}

          {socialMediaLinks.instagram ? (
            <a
              href={socialMediaLinks.instagram}
              className="icon-button instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
              <span></span>
            </a>
          ) : null}

        </div>
      </div>

      <div className="fixed-side right">
        <div className="fixed-side-content">
          {/* vertical text or icons */}
          spoorthy.kr@tamu.edu
        </div>
      </div>

      <div className="main-wrapper">
        <Main />
      </div>
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
