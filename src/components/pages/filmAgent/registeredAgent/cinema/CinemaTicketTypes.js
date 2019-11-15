//page 31

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import CinemaTicketTypesForm from "../.../../../../../forms/cinema/CinemaTicketTypesForm"

export default class CinemaTicketTypes extends React.Component {
  state = {
    tickets: [{ description: null, amount: null, currency: null }]
  }

  addTicket = () => {
    this.setState({
      tickets: [...this.state.tickets, { hallname: null, seats: null, projectorID: null }]
    })
  }
  
  render() {
    const { tickets } = this.state
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/cinema/Cinema" />
      <h3>Cinema ticket types</h3>
      {tickets.map((ticket,index) => {
        return <div><p>Ticket {index +1}</p><CinemaTicketTypesForm/></div>
      })}
      <button onClick={this.addTicket}>+</button>
    </div>)
  }
} 