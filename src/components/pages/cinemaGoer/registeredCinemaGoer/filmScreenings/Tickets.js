//page 35

import React from "react";
import TicketsSearchForm from "../../../../forms/cinemaGoer/TicketsSearchForm";
import TicketsResults from "../../../../forms/cinemaGoer/TicketsResults";

export default class Tickets extends React.Component {
  render() {
    return (
      <div>
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
