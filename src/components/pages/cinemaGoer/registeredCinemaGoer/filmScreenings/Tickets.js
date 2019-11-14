//page 35

import React from "react";
import TicketsSearchForm from "../../../../forms/cinemaGoer/TicketsSearchForm";
import TicketsResults from "../../../../forms/cinemaGoer/TicketsResults";
import { GoBackButton } from "../../../../UI/GoBackButton";

export default class Tickets extends React.Component {
  render() {
    return (
      <div>
        <GoBackButton path="/cinemaGoer/registeredCinemaGoer/filmScreenings/Screenings" />
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
