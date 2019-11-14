//page 24

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import RegisteredAgentAddAgentsForm from "../../../../forms/RegisteredAgentAddAgentsForm"

export default class RightOwnerAgents extends React.Component {
  render() {
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/rightOwner/RightOwner" />
      <RegisteredAgentAddAgentsForm type="right owner agents"/>
    </div>)
  }
} 
