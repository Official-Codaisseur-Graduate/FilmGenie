// page 35

import React from "react";
import { withRouter } from "react-router-dom";
import { data } from "../../../data/Tickets";

class TicketsResults extends React.Component {
  onSubmit = event => {
    event.preventDefault();

    // api call to create a purcahse, calculate the total amount

    this.props.history.push("/cinemaGoer/Ticket");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {data.map(ticket => {
            return (
              <div key={ticket.id}>
                <h5>Ticket type</h5>
                <p>{ticket.description}</p>
                <h5>Amount</h5>
                <p>{ticket.amount}</p>
                <h5>Currency</h5>
                {/* use CurrencyList */}
                <p>{ticket.currency}</p> 
                <h5>Number of tickets</h5>
                {/* use TicketNumber List */}
                <select name="number">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  {/* more options, maximum = tickets left */}
                </select>
              </div>
            );
          })}
          <button className="to-side-right">Pay tickets</button>
        </form>
      </div>
    );
  }
}

export default withRouter(TicketsResults);
