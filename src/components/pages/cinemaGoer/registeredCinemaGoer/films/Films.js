//page 37

import React from "react";
import CinemaGoerFilmsForm from '../../../../forms/cinemaGoer/CinemaGoerFilmsForm'

export default class Films extends React.Component {
  render() {
    return (
      <div>
        <h4>
          <em>Films</em>
        </h4>
        <CinemaGoerFilmsForm />
      </div>
    );
  }
}
