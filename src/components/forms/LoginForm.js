import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="inputs" style={{justifyContent: "center"}}>
            <div>
              <label>
                <b>Email</b>
              </label>
              <input
                name="email"
                type="text"
                // onChange={this.props.onChange}
                // value={this.props.values.email}
                placeholder="email"
              ></input>
            </div>
            <div>
              <label>
                <b>Password</b>
              </label>
              <input
                name="password"
                type="text"
                // onChange={this.props.onChange}
                // value={this.props.values.password}
                placeholder="password"
              ></input>
            </div>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
