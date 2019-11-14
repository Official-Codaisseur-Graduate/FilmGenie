//page 3

import React from "react";
import ChoiceButtons from "../../UI/ChoiceButtons";
import GoBackButton from "../../UI/GoBackButton";

export default class CinemaGoerRegistration extends React.Component {
  newCinameGoer = () => {
    this.props.history.push("/cinemaGoer/newCinemaGoer/NewCinemaGoer"); // page 34
  };

  registeredCinemaGoer = () => {
    this.props.history.push("/cinemaGoer/registeredCinemaGoer/RegisteredCinemaGoer"); //page 7
  };

  render() {
    const choice1 = {
      name: "I am a new cinema-goer",
      action: this.newCinameGoer
    };

    const choice2 = {
      name: "I am a registered cinema-goer",
      action: this.registeredCinemaGoer
    };

    return (
      <div>
        <div>
          <GoBackButton path="/" />
          <h3>Cinema-goer</h3>
          <ChoiceButtons choice1={choice1} choice2={choice2} />
        </div>
      </div>
    );
  }
}
