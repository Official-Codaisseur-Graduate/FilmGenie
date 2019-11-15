//page 35

import React from "react";
import TicketsSearchForm from "../../../../forms/cinemaGoer/TicketsSearch";
import TicketsResults from "../../../../forms/cinemaGoer/TicketsResults";
import GoBackSideButton from "../../../../UI/GoBackSideButton";

export default class Tickets extends React.Component {
  render() {
    return (
      <div>
        <GoBackSideButton path="/cinemaGoer/registeredCinemaGoer/filmScreenings/Screenings" />
        <div>
          <TicketsSearchForm />
        </div>
        <div>
          <TicketsResults />
        </div>
      </div>
    );
  }
}
