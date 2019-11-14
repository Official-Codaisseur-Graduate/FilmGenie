//page 37

import React from "react";
import CinemaGoerFilmsForm from '../../../../forms/cinemaGoer/CinemaGoerFilmsForm'
import { GoBackButton } from "../../../../UI/GoBackButton";

export default class Films extends React.Component {
  render() {
    return (
      <div>
        <GoBackButton path="/cinemaGoer/registeredCinemaGoer/CinemaGoer" />
        <h4>
          <em>Films</em>
        </h4>
        <CinemaGoerFilmsForm />
      </div>
    );
  }
}
