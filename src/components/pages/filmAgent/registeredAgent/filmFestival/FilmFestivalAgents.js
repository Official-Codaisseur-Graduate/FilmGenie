//page 15

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import RegisteredAgentAddAgentsForm from "../../../../forms/RegisteredAgentAddAgentsForm"

export default class FilmFestivalAgents extends React.Component {
  render() {
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/filmFestival/FilmFestival" />
      <RegisteredAgentAddAgentsForm type="film festival agents" />
    </div>)
  }
} 
