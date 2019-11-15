//page 29

import React from "react"
import RegisteredAgentDetailsForm from "../../../../forms/RegisteredAgentDetailsForm"
import GoBackSideButton from "../../../../UI/GoBackSideButton";

export default class CinemaDetails extends React.Component {
  render() {
    return (<div>
      <GoBackSideButton path="/filmAgent/registeredAgent/cinema/Cinema" />
      <RegisteredAgentDetailsForm type="cinema" />
    </div>)
  }
} 