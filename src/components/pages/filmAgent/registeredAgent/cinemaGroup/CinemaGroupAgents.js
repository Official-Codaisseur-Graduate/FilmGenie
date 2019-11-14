//page 18

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import RegisteredAgentAddAgentsForm from "../../../../forms/RegisteredAgentAddAgentsForm"

export default class CinemaGroupAgents extends React.Component {
  render() {
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/cinemaGroup/CinemaGroup" />
      <RegisteredAgentAddAgentsForm type="cinema group agents" />
    </div>)
  }
} 
