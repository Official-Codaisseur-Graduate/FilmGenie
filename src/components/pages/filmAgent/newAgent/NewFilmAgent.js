//page 4

import React from "react";
import ChoiceButtons from "../../../UI/ChoiceButtons";
import GoBackButton from "../../../UI/GoBackButton";

export default class NewFilmAgent extends React.Component {
  filmLookForScreen = () => {
    this.props.history.push("/filmAgent/newAgent/NewRightOwner"); //page 9
  };

  screenLookForFilm = () => {
    this.props.history.push("/filmAgent/newAgent/NewFilmExhibitor"); //page 5
  };

  render() {
    const choice1 = {
      name: "My film looks for screen",
      action: this.filmLookForScreen
    };

    const choice2 = {
      name: "My screen looks for films",
      action: this.screenLookForFilm
    };

    return (
      <div>
        <div>
          <GoBackButton path="/filmAgent/FilmAgentRegistration" />

          <h3>New film agent</h3>
          <ChoiceButtons choice1={choice1} choice2={choice2} />
        </div>
      </div>
    );
  }
}
