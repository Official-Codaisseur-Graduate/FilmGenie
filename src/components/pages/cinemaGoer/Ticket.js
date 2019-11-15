//page 39

import React from "react";
import AccessControl from "../../AccessControl";
import GoBackSideButton from "../../UI/GoBackSideButton"

export default class Ticket extends React.Component {
  render() {
    return (
      <div>
        <GoBackSideButton path="/cinemaGoer/registeredCinemaGoer/RegisteredCinemaGoer" />
        <AccessControl type="ticket" />
      </div>
    );
  }
}
