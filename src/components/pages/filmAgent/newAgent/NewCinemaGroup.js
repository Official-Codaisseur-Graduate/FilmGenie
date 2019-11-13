//page 12

import React from "react";
import NewAgentForm from "../../../forms/NewAgentForm";
import GoBackButton from "../../../UI/GoBackButton";

export default class NewCinemaGroup extends React.Component {
  render() {
    return (
      <div>
        <GoBackButton path="/filmAgent/newAgent/NewCinemaOrCinemaGroup" />

        <NewAgentForm type="cinema group" />
      </div>
    );
  }
}
