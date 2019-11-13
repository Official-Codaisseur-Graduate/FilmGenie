import React, { Component } from "react";
import { connect } from "react-redux";

export class RegisteredAgentType extends Component {
  getNameLabel = type => {
    switch (type) {
      case "right owner":
        return "Right owner";
      case "film festival":
        return "Festival organization";
      case "cinema group":
        return "Cinema group";
      case "cinema":
        return "Cinema";
      default:
        return null;
    }
  };
  
  render() {
    const { type } = this.props;
    const nameLabel = getNameLabel(type);

    return (
      <div>
        <h4>
          <em>{type}</em>
        </h4>
        <form>
          <div>
            <label htmlFor="name">{nameLabel}</label>
            <input type="text" name="name" placeholder="Name"></input>
            <button>Details</button>
          </div>
          <div>
            <label htmlFor="login">Login</label>
            <input type="text" name="login" placeholder="Full name"></input>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisteredAgentType);
