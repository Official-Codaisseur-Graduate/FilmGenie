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
              <span>{screening.cinemaName}</span>
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

export default withRouter(ScreeningsOfSelectedFilmLocations)