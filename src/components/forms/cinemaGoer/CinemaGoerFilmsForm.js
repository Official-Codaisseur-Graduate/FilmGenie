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
            <label>Title</label>
              <input type="text" name="title" placeholder="Title"></input>
            <label>Director</label>
              <input type="text" name="director" placeholder="Director"></input>
            <label>Year
              <YearsList />
            </label>
            <label>Country
              <CountryList />
            </label>
            <label>Running Time</label>
              <input type="number" name="running_time" placeholder="Minutes"></input>
            <br />
            <label>Actors</label>
              <input type="text" name="actors" placeholder="Actors"></input>
            <br />
            <label>Genre
              <GenresList />
            </label>
            <label>Etc.</label>
              <input type="text" name="etc" placeholder="Etc."></input>
            <button type="submit">search/filter</button>
            <button className="to-side-right" onClick={this.getDetails}>Details</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(CinemaGoerFilmsForm);
