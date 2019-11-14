//page 27

import React from "react"
import RegisteredAgentDetailsForm from "../../../../forms/RegisteredAgentDetailsForm"
import GoBackButton from "../../../../UI/GoBackButton";

export default class FilmFestivalDetails extends React.Component {
  render() {
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/filmFestival/FilmFestival" />
      <RegisteredAgentDetailsForm type="film festival" />
    </div>)
  }
} 