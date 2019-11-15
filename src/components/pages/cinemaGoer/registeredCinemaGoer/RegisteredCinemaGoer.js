//page 7

import React from "react";
import LoginForm from "../../../forms/LoginForm";
import GoBackButton from "../../../UI/GoBackButton";

export default class RegisteredCinemaGoer extends React.Component {
  state = {
    loggedIn: false
  };

  handleOnSubmit = event => {
    event.preventDefault();

    //here to do api call to get auth token, if get auth token successfully, do the following
    this.setState({
      loggedIn: true
    });

    //for demostration purpose, here assumes always login success, pause 1 sec to show logged in message, then go to page 8
    setTimeout(() => {
      this.props.history.push("/cinemaGoer/registeredCinemaGoer/CinemaGoer"); // page 8
    }, 1000);
  };

  render() {
    return (
      <div>
        <GoBackButton path="/cinemaGoer/CinemaGoerRegistration" />
        <h4>Registered cinema-goer</h4>
        <LoginForm onSubmit={this.handleOnSubmit} />
        {this.state.loggedIn && <p>You are logged in!</p>}
      </div>
    );
  }
}
