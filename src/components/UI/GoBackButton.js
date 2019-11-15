import React, { Component } from "react";
import { withRouter } from "react-router";

export class GoBackButton extends Component {
  handleClick = () => {
      this.props.history.push(this.props.path)
  };
  render() {
    return (
      <div>
        <button className="to-top" onClick={this.handleClick}>Previous step</button>
      </div>
    );
  }
}

export default withRouter(GoBackButton);
