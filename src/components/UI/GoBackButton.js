import React, { Component } from "react";
import { withRouter } from "react-router";

export class GoBackButton extends Component {
  handleClick = () => {
      this.props.history.push(this.props.path)
  };
  render() {
    return (
      <div>
        <button className="button to-top back-button" onClick={this.handleClick}>Previous step</button>
      </div>
    );
  }
}

export default withRouter(GoBackButton);
