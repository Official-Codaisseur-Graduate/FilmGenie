//page 10

import React from "react";
import NewAgentForm from "../../../forms/NewAgentForm";
import GoBackButton from "../../../UI/GoBackButton";

export default class NewFilmFestival extends React.Component {
  render() {
    return (
      <div>
        <GoBackButton path="/filmAgent/newAgent/NewFilmExhibitor" />

        <NewAgentForm type="film festival" />
      </div>
    );
  }
}
