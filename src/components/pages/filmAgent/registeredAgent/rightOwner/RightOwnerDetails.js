//page 26

import React from "react"
import RegisteredAgentDetailsForm from "../../../../forms/RegisteredAgentDetailsForm"
import GoBackSideButton from "../../../../UI/GoBackSideButton";

export default class RightOwnerDetails extends React.Component {
  render() {
    return (<div>
      <GoBackSideButton path="/filmAgent/registeredAgent/rightOwner/RightOwner" />
      <RegisteredAgentDetailsForm type="right owner" />
    </div>)
  }
} 