import React, { Component } from "react";

export class RegistrationHome extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Filmgenie.com</h1>
          <h3>Welcome to the machine</h3>
        </div>
        <div>
          <button>
            I am a film agent
            <span>
              A film agent is someone who represents one or more existing films
              and seeks an audience. This can be a direct or indirect right
              owner, a film festival or a cinema (group).
            </span>
          </button>
          <button>I am a cinema-goer</button>
        </div>
      </div>
    );
  }
}
