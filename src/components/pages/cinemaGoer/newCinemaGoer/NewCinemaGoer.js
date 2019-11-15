//page 34

import React from "react";
import NewCinemaGoerForm from "../../../forms/cinemaGoer/NewCinemaGoerForm";
import GoBackButton from "../../../UI/GoBackButton";

export default class NewCinemaGoer extends React.Component {
  render() {
    return (
      <div>
        <GoBackButton path="/cinemaGoer/CinemaGoerRegistration" />

        <NewCinemaGoerForm />
      </div>
    );
  }
}
