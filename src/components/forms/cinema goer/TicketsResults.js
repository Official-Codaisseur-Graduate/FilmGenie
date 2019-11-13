// page 35

import React from 'react'

export default class TicketsResults extends React.Component {
  render() {
    return (
      <div>
        {this.props.tickets.map((ticket) => {
          return (
            <div>
                <div key={ticket.id}>
                  <p>{ticket.description}</p>
                  <p>{ticket.amount}</p>
                  <p>{ticket.currency}</p>
                  <p>{ticket.number}</p>
                  <button>buy</button>
                </div>
            </div>
          )
        })}
      </div>
    )
  }
}