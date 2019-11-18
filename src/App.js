import React from "react";
import "./App.css";
import "./css/main.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="title">
          <h1><a href="/">Filmgenie.com</a></h1>
          <p>Welcome to the machine</p>
        </div>
      </header>
      <main>
        <div>
          <div className="container">
            <Routes />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
