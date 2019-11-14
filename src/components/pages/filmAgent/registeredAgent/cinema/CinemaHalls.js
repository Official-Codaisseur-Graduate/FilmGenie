//page 30

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import CinemaHallsForm from "../.../../../../../forms/cinema/CinemaHallsForm"


export default class CinemaHalls extends React.Component {
  render() {
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/cinema/Cinema" />
      <h3>Cinema halls</h3>
      <CinemaHallsForm/>
    </div>)
  }
} 