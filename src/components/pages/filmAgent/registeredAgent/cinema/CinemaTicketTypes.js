//page 31

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import CinemaTicketTypesForm from "../.../../../../../forms/cinema/CinemaTicketTypesForm"

export default class CinemaTicketTypes extends React.Component {
  render() {
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/cinema/Cinema" />
      <h3>Cinema ticket types</h3>
      <CinemaTicketTypesForm/>
    </div>)
  }
} 