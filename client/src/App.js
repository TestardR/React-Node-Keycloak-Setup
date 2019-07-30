import React from "react";

import "./App.css";
import Private from "./components/Private";
import Realm from "./components/Realm";

function App() {
  return (
    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Private />
      <Realm />
    </header>
  );
}

export default App;
