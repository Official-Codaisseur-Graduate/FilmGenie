//page 32

import React from "react";
import ScreeningResults from "../../../../forms/cinemaGoer/ScreeningResults";
import ScreeningsSearchForm from '../../../../forms/cinemaGoer/ScreeningsSearchForm'
import GoBackButton from "../../../../UI/GoBackButton";

export default class Screenings extends React.Component {
  render() {
    return (
      <div>
        <GoBackButton path="/cinemaGoer/registeredCinemaGoer/CinemaGoer" />
        <h4>
          <em>Screenings</em>
        </h4>
        <div><ScreeningsSearchForm /></div>
        <div>
          <ScreeningResults />
        </div>
      </div>
    );
  }
}
