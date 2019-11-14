// page 37

import React from "react";
import { withRouter } from "react-router-dom";
import CountryList from "../lists/CountryList";
import YearsList from "../lists/YearsList";
import GenresList from "../lists/GenresList";

class CinemaGoerFilmsForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    //api call

    this.props.history.push("/cinemaGoer/registeredCinemaGoer/films/ScreeningsOfSelectedFilm");
  };

  getDetails = event => {
    event.preventDefault();

    //api call
    this.props.history.push("/Film");
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Title
              <input type="text" name="title" placeholder="Title"></input>
            </label>
            <label>
              Director
              <input type="text" name="director" placeholder="Director"></input>
            </label>
            <label>
              Year
              <YearsList />
            </label>
            <label>
              Country
              <CountryList />
            </label>
            <label>
              Running Time
              <input
                type="number"
                name="running_time"
                placeholder="Minutes"
              ></input>
            </label>
            <br />
            <label>
              Actors
              <input type="text" name="actors" placeholder="Actors"></input>
            </label>
            <br />
            <label>
              <GenresList />
            </label>
            <label>
              Etc.
              <input type="text" name="etc" placeholder="Etc."></input>
            </label>
            <button type="submit">search/filter</button>
            <button onClick={this.getDetails}>Details</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(CinemaGoerFilmsForm);
