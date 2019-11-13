//page 5

import React from "react";
import ChoiceButtons from "../../../UI/ChoiceButtons";
import GoBackButton from "../../../UI/GoBackButton";

export default class NewFilmExhibitor extends React.Component {
  runFilmFestival = () => {
    this.props.history.push("/filmAgent/newAgent/NewFilmFestival"); //page 10
  };

  runCinemas = () => {
    this.props.history.push("/filmAgent/newAgent/NewCinemaOrCinemaGroup"); //page 11
  };

  render() {
    const choice1 = {
      name: "I run a film festival",
      action: this.runFilmFestival
    };

    const choice2 = {
      name: "I run a (or more) cinema(s)",
      action: this.runCinemas
    };

    return (
      <div>
        <div>
          <GoBackButton path="/filmAgent/newAgent/NewFilmAgent" />

          <h3>New film exhibitor</h3>
          <ChoiceButtons choice1={choice1} choice2={choice2} />
        </div>
      </div>
    );
  }
}
