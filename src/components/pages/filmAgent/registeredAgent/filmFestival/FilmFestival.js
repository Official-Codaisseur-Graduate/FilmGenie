//page 14

import React from "react"
import ChoiceButtons from "../../../../UI/ChoiceButtons"
import GoBackButton from "../../../../UI/GoBackButton";
import RegisteredAgentForm from "../../../../forms/RegisteredAgentForm"

export default class FilmFestival extends React.Component {
  agents = () => {
    this.props.history.push("/filmAgent/registeredAgent/filmFestival/FilmFestivalAgents") //page 15
  }

  editions = () => {
    this.props.history.push("/filmAgent/registeredAgent/filmFestival/FilmFestivalEditions") //page 16
  }

  details = () => {
    this.props.history.push("/filmAgent/registeredAgent/filmFestival/FilmFestivalDetails") //page 27
  }

  render() {
    const choice1 = {
      name: "agents",
      action: this.agents
    };
    const choice2 = {
      name: "editions",
      action: this.editions
    };
    return (<div>
      <div>
        <GoBackButton path="/filmAgent/registeredAgent/RegisteredFilmAgent" />
        <h3>Film festival</h3>
        <RegisteredAgentForm type="film festival" details={this.details}/>
        <ChoiceButtons choice1={choice1} choice2={choice2}  />
      </div>
    </div>)
  }
} 