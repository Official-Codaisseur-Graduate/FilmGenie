//page 36

import React from "react";
import ScreeningsOfSelectedFilmForm from "../../../../forms/cinemaGoer/ScreeningsOfSelectedFilmForm";
import ScreeningsOfSelectedFilmLocations from "../../../../forms/cinemaGoer/ScreeningsOfSelectedFilmLocations";

export default class ScreeningsOfSelectedFilm extends React.Component {
  render() {
    return (
      <div>
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
