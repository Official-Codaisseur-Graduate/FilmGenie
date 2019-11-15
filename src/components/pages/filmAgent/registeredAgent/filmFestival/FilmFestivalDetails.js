//page 27

import React from "react"
import RegisteredAgentDetailsForm from "../../../../forms/RegisteredAgentDetailsForm"
import GoBackSideButton from "../../../../UI/GoBackSideButton";

export default class FilmFestivalDetails extends React.Component {
  render() {
    return (<div>
      <GoBackSideButton path="/filmAgent/registeredAgent/filmFestival/FilmFestival" />
      <RegisteredAgentDetailsForm type="film festival" />
    </div>)
  }
} 