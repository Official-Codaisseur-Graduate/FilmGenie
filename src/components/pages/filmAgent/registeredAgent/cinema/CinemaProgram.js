//page 22

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import CinemaProgramForm from "../.../../../../../forms/cinema/CinemaProgramForm"

export default class CinemaProgram extends React.Component {
  accessControl = () => {
    this.props.history.push("/filmAgent/AccessControl") //page 38
  }

  render() {
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/cinema/Cinema" />
      <h3>Cinema program</h3>
      <CinemaProgramForm accessControl={this.accessControl}/>
    </div>)
  }
} 