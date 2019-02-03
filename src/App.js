import React, { Component } from 'react';
import logo from './logo-teto.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo TETO Brasil" />
          <p>
            {/*Edit <code>src/App.js</code> and save to reload.}*/}
            Em construção
          </p>
          <a
            className="App-link"
            href="https://www.techo.org/brasil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TETO Brasil
          </a>
        </header>
      </div>
    );
  }
}

export default App;
