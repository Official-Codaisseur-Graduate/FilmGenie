import React from "react";
import "./App.css";
import "./css/main.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="title">
          <h1>Filmgenie.com</h1>
          <h4>welcome to the machine</h4>
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
