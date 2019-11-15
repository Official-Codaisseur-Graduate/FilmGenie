//page 8

import React from "react";
import CinemaGoerForm from "../../../forms/cinemaGoer/CinemaGoerForm";
import CountryCityForm from "../../../forms/cinemaGoer/CountryCityForm";
import ChoiceButtons from "../../../UI/ChoiceButtons";
import GoBackButton from "../../../UI/GoBackButton";

export default class CinemaGoer extends React.Component {
  state = {
    isLookForFilmScreenings: false
  };

  lookForFilms = () => {
    this.props.history.push("/cinemaGoer/registeredCinemaGoer/films/Films"); // page 37
  };

  lookForFilmScreenings = () => {
    this.setState({
      isLookForFilmScreenings: true
    });
   
  };

  countryCityOnSubmit = (event) => {
    event.preventDefault();

     this.props.history.push(
      "/cinemaGoer/registeredCinemaGoer/filmScreenings/Screenings"
    ); //page 32
  }

  render() {
    const choice1 = {
      name: "I look for films",
      action: this.lookForFilms
    };

    const choice2 = {
      name: "I look for film screenings",
      action: this.lookForFilmScreenings
    };

    return (
      <div>
        <GoBackButton path="/cinemaGoer/registeredCinemaGoer/RegisteredCinemaGoer" />

        <h4>
          <em>Cinema-goer</em>
        </h4>
        <CinemaGoerForm />
        <div>
          <ChoiceButtons choice1={choice1} choice2={choice2} />
          {this.state.isLookForFilmScreenings && (
            <div>
              <CountryCityForm onSubmit={this.countryCityOnSubmit} /> 
              {/* pass form data to next step */}
            </div>
          )}
        </div>
      </div>
    );
  }
}
