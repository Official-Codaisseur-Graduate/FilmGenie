//page 13

import React from "react";
import NewAgentForm from "../../../forms/NewAgentForm";
import GoBackButton from "../../../UI/GoBackButton";

export default class NewCinema extends React.Component {
  render() {
    return (
      <div>
        <GoBackButton path="/filmAgent/newAgent/NewCinemaOrCinemaGroup" />

        <NewAgentForm type="cinema" />
      </div>
    );
  }
}
