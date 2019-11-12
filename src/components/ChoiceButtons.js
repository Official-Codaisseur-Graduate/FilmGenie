import React, { Component } from "react";

export class ChoiceButtons extends Component {
  render() {
    const { choice1, choice2 } = this.props;
    return (
      <div className="group-buttons">
        <button onClick={choice1.action}>{choice1.name}</button>
        <button onClick={choice2.action}>{choice2.name}</button>
      </div>
    );
  }
}