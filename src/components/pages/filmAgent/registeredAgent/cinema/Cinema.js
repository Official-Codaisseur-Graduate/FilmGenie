//page 20

import React from "react";
import ChoiceButtons from "../../../../UI/ChoiceButtons";
import GoBackButton from "../../../../UI/GoBackButton";
import RegisteredAgentForm from "../../../../forms/RegisteredAgentForm"

export default class Cinema extends React.Component {
  agent = () => {
    this.props.history.push("/filmAgent/registeredAgent/cinema/CinemaAgents"); // page 21
  };

  hall = () => {
    this.props.history.push("/filmAgent/registeredAgent/cinema/CinemaHalls"); // page 30
  };

  ticketTypes = () => {
    this.props.history.push("/filmAgent/registeredAgent/cinema/CinemaTicketTypes"); // page 31
  };

  screenings = () => {
    this.props.history.push("/filmAgent/registeredAgent/cinema/CinemaProgram"); // page 22
  };

  render() {
    const choice1 = {
      name: "Agent",
      action: this.agent
    };

    const choice2 = {
      name: "Hall",
      action: this.hall
    };

    const choice3 = {
      name: "Ticket types",
      action: this.ticketTypes
    };

    const choice4 = {
      name: "Screenings",
      action: this.screenings
    };

    return (
      <div>
        <div>
          <GoBackButton path="/filmAgent/registeredAgent/RegisteredFilmAgent" />
          <h3>Cinema</h3>
          <RegisteredAgentForm type="cinema"/>
          <ChoiceButtons choice1={choice1} choice2={choice2} />
          <ChoiceButtons choice1={choice3} choice2={choice4} />
        </div>
      </div>
    );
  }
}
