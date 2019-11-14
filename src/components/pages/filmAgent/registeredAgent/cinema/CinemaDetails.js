//page 29

import React from "react"
import RegisteredAgentDetailsForm from "../../../../forms/RegisteredAgentDetailsForm"
import GoBackButton from "../../../../UI/GoBackButton";

export default class CinemaDetails extends React.Component {
  render() {
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/cinema/Cinema" />
      <RegisteredAgentDetailsForm type="cinema" />
    </div>)
  }
} 