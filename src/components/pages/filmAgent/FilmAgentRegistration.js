//page 2
import React from "react";
import ChoiceButtons from "../../UI/ChoiceButtons";
import GoBackButton from "../../UI/GoBackButton";

export default class FilmAgentRegistration extends React.Component {
  newFilmAgent = () => {
    this.props.history.push("/filmAgent/newAgent/NewFilmAgent"); // page 4
  };

  registeredFilmAgent = () => {
    this.props.history.push("/filmAgent/registeredAgent/RegisteredFilmAgent"); //page 6
  };

  render() {
    const choice1 = {
      name: "I am a new agent",
      action: this.newFilmAgent
    };

    const choice2 = {
      name: "I am registered agent",
      action: this.registeredFilmAgent
    };

    return (
      <div>
        <div>
          <GoBackButton path="/" />
          <h3>Film agent</h3>
          <ChoiceButtons choice1={choice1} choice2={choice2} />
        </div>
      </div>
    );
  }
}
