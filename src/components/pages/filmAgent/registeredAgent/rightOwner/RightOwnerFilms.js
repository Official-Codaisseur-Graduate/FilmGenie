//page 25

import React from "react";
import GoBackSideButton from "../../../../UI/GoBackSideButton";
import RightOwnerFilmsForm from "../../../../forms/rightOwner/RightOwnerFilmsForm";
import superagent from "superagent";

export default class RightOwnerFilms extends React.Component {
  componentDidMount = async () => {
    // needs a new endpoint for films belonging to rights owner
    const films = await superagent.get("filmgenie.com/api/????");
  };

  state = {
    films: [
      {
        title: null,
        imdbNumber: 7662752,
        territory: null,
        startDate: null,
        endDate: null
      }
    ]
  };

  // This button should add the IMDB number of the selected film to redux state, which can be retrieved in the FilmForm component.
  details = () => {
    console.log("This props history ", this.props.history);
    console.log();
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
          console.log("FILM: ", film);
          return (
            <div>
              <div>
                <p>Film {index + 1}</p>
                <button className="to-side-right" onClick={this.details}>
                  details
                </button>
              </div>
              <RightOwnerFilmsForm addFilm={this.addFilm} />
            </div>
          );
        })}
        {/* <button onClick={this.addFilm}> ADD FILM</button> */}
      </div>
    );
  }
}
