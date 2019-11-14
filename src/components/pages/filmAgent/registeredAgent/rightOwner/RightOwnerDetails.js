//page 26

import React from "react"
import RegisteredAgentDetailsForm from "../../../../forms/RegisteredAgentDetailsForm"
import GoBackButton from "../../../../UI/GoBackButton";

export default class RightOwnerDetails extends React.Component {
  render() {
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/rightOwner/RightOwner" />
      <RegisteredAgentDetailsForm type="right owner" />
    </div>)
  }
} 