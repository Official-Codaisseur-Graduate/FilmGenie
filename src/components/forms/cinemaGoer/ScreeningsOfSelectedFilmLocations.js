// page 36

import React from "react";
import {withRouter} from 'react-router-dom'
import { data } from "../../../data/ScreeningsOfSelectedFilm";

class ScreeningsOfSelectedFilmLocations extends React.Component {
  getTickets = () => {
    //function to dispatch ticket info to reducer, this info will show on tickets page (page 35)

    this.props.history.push(
      "/cinemaGoer/registeredCinemaGoer/filmScreenings/Tickets"
    );
  };

  render() {
    return (
      <div>
        {data.map((screening, index) => {
          return (
            <div key={screening.id}>
              <h5>Screening {index + 1}</h5>
              <span>{screening.location}</span>
              <h5>Cinema</h5>
              <span>{screening.cinemaName}</span>
              <h5>Date</h5>
              <span>{screening.date}</span>
              <h5>Time</h5>
              <span>{screening.time}</span>
              <button onClick={this.getTickets}>tickets</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(ScreeningsOfSelectedFilmLocations)