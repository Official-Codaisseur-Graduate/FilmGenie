//page 28

import React from "react"
import RegisteredAgentDetailsForm from "../../../../forms/RegisteredAgentDetailsForm"
import GoBackButton from "../../../../UI/GoBackButton";

export default class CinemaGroupDetails extends React.Component {
  render() {
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/cinemaGroup/CinemaGroup" />
      <RegisteredAgentDetailsForm type="cinema group" />
    </div>)
  }
} 