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
                <p>{ticket.description}</p>
                <p>{ticket.amount}</p>
                <p>{ticket.currency}</p>
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
          <button>Pay tickets</button>
        </form>
      </div>
    );
  }
}

export default withRouter(TicketsResults);
