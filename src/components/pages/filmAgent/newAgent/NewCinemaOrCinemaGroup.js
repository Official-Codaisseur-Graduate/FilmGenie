//page 11

import React from "react";
import ChoiceButtons from "../../../UI/ChoiceButtons";
import GoBackButton from "../../../UI/GoBackButton";

export default class NewCinemaOrCinemaGroup extends React.Component {
  runCinemaGroup = () => {
    this.props.history.push("/filmAgent/newAgent/NewCinemaGroup"); //page 12
  };

  runCinema = () => {
    this.props.history.push("/filmAgent/newAgent/NewCinema"); //page 13
  };

  render() {
    const choice1 = {
      name: "I run a cinema group",
      action: this.runCinemaGroup
    };

    const choice2 = {
      name: "I run a cinema",
      action: this.runCinema
    };

    return (
      <div>
        <div>
          <GoBackButton path="/filmAgent/newAgent/NewFilmExhibitor" />

          <h3>New cinema(group)</h3>
          <ChoiceButtons choice1={choice1} choice2={choice2} />
        </div>
      </div>
    );
  }
}
