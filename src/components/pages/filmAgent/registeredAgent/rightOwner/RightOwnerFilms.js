//page 25

import React from "react";
import GoBackSideButton from "../../../../UI/GoBackSideButton";
import RightOwnerFilmsForm from "../../../../forms/rightOwner/RightOwnerFilmsForm";

export default class RightOwnerFilms extends React.Component {
  state = {
    films: [
      {
        title: null,
        imdbNumber: null,
        territory: null,
        startDate: null,
        endDate: null
      }
    ]
  };

  details = () => {
    this.props.history.push("/Film"); //page 40
  };

  addFilm = () => {
    this.setState({
      films: [
        ...this.state.films,
        {
          title: null,
          imdbNumber: null,
          Territory: null,
          startDate: null,
          endDate: null
        }
      ]
    });
  };

  render() {
    const { films } = this.state;
    return (
      <div>
        <GoBackSideButton path="/filmAgent/registeredAgent/rightOwner/RightOwner" />
        <h3>Right owner films</h3>
        {films.map((film, index) => {
          return (
            <div>
              <p>Film {index + 1}</p>
              <RightOwnerFilmsForm details={this.details} />
            </div>
          );
        })}
        <button onClick={this.addFilm}> ADD FILM</button>
      </div>
    );
  }
}
