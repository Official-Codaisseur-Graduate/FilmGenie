import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <div>
      <form onSubmit={this.props.onSubmit}>
        <h1>Log in</h1>
        <label><b>Email</b></label>s
        <input
          name='email'
          type='text'
          // onChange={this.props.onChange}
          // value={this.props.values.email}
          placeholder='email'
        ></input>
        <label><b>Password</b></label>
        <input
          name='password'
          type='text'
          // onChange={this.props.onChange}
          // value={this.props.values.password}
          placeholder='password'
        ></input>
        <button type='submit'>Login</button>
      </form>
    </div>)
  }
}

