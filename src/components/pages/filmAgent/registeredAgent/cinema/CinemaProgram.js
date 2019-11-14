//page 22

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import CinemaProgramForm from "../.../../../../../forms/cinema/CinemaProgramForm"

export default class CinemaProgram extends React.Component {
  render() {
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/cinema/Cinema" />
      <h3>Cinema program</h3>
      <CinemaProgramForm/>
    </div>)
  }
} 