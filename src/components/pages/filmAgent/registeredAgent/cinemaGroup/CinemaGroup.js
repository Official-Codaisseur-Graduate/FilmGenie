//page 17

import React from "react"
import ChoiceButtons from "../../../../UI/ChoiceButtons";
import GoBackButton from "../../../../UI/GoBackButton";
import RegisteredAgentForm from "../../../../forms/RegisteredAgentForm"

export default class CinemaGroup extends React.Component {
  agents = () => {
    this.props.history.push("/filmAgent/registeredAgent/cinemaGroup/CinemaGroupAgents") //page 18
  }

  cinemas = () => {
    this.props.history.push("/filmAgent/registeredAgent/cinemaGroup/CinemaGroupCinemas") //page 19
  }

  render() {
    const choice1 = {
      name: "agents",
      action: this.agents
    };
    const choice2 = {
      name: "cinemas",
      action: this.cinemas
    };
    return (<div>
      <div>
        <GoBackButton path="/filmAgent/registeredAgent/RegisteredFilmAgent" />
        <h3>Cinema group</h3>
        <RegisteredAgentForm type="cinema group" />
        <ChoiceButtons choice1={choice1} choice2={choice2} />
      </div>
    </div>)
  }
} 
