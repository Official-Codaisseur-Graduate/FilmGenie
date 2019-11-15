import React, { Component } from "react";
import { withRouter } from "react-router";

export class GoBackSideButton extends Component {
  handleClick = () => {
      this.props.history.push(this.props.path)
  };
  render() {
    return (
      <div>
        <button className="button to-side-left back-button " onClick={this.handleClick}>Go back</button>
      </div>
    );
  }
}

export default withRouter(GoBackSideButton);