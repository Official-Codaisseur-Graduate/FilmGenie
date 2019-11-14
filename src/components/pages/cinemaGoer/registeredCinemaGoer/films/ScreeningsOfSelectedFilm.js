//page 36

import React from "react";
import ScreeningsOfSelectedFilmForm from "../../../../forms/cinemaGoer/ScreeningsOfSelectedFilm";
import ScreeningsOfSelectedFilmLocations from "../../../../forms/cinemaGoer/ScreeningsOfSelectedFilmLocations";
import GoBackButton from "../../../../UI/GoBackButton";

export default class ScreeningsOfSelectedFilm extends React.Component {
  render() {
    return (
      <div>
        <GoBackButton path="/cinemaGoer/registeredCinemaGoer/films/Films" />
        <h4>
          <em>Screenings Of selected film</em>
        </h4>
        <div>
          <ScreeningsOfSelectedFilmForm />
          <ScreeningsOfSelectedFilmLocations />
        </div>
      </div>
    );
  }
}
