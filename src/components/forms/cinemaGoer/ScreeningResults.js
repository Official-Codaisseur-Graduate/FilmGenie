// page 32

import React from "react";
import { withRouter } from "react-router-dom";
import { data } from "../../../data/Screenings";

class ScreeningResults extends React.Component {
  getTickets = () => {
    //function to dispatch ticket info to reducer, this info will show on tickets page (page 35)

    this.props.history.push(
      "/cinemaGoer/registeredCinemaGoer/filmScreenings/Tickets"
    );
  };

  render() {
    return (
      <div>
        {data.map(screening => {
          return (
            <div key={screening.id}>
              <span>{screening.title}</span>
              <span>{screening.date}</span>
              <span>{screening.time}</span>
              <button onClick={this.getTickets}>tickets</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(ScreeningResults);
