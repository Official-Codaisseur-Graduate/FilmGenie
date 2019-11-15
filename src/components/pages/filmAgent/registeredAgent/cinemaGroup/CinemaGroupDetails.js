//page 28

import React from "react"
import RegisteredAgentDetailsForm from "../../../../forms/RegisteredAgentDetailsForm"
import GoBackSideButton from "../../../../UI/GoBackSideButton";

export default class CinemaGroupDetails extends React.Component {
  render() {
    return (<div>
      <GoBackSideButton path="/filmAgent/registeredAgent/cinemaGroup/CinemaGroup" />
      <RegisteredAgentDetailsForm type="cinema group" />
    </div>)
  }
} 