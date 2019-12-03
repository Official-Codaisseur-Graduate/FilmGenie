import React from "react";
import "./App.css";
import "./css/main.css";
import Routes from "./Routes";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      {" "}
      <div className="App">
        <header className="header">
          <div className="title">
            <h1>
              <a href="/">Filmgenie.com</a>
            </h1>
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
    </Provider>
  );
}

export default App;
