//page 25

import React from "react";
import GoBackSideButton from "../../../../UI/GoBackSideButton";
import RightOwnerFilmsForm from "../../../../forms/rightOwner/RightOwnerFilmsForm";
import superagent from "superagent";
import { loadFilms } from "../../../../../actions/fetchFilmDetails";
import { connect } from "react-redux";

export class RightOwnerFilms extends React.Component {
  state = {
    films: [
      {
        title: null,
        imdbNumber: 7662752,
        territory: null,
        startDate: null,
        endDate: null
      }
    ],
    filmName: ""
  };

  // This button should add the IMDB number of the selected film to redux state, which can be retrieved in the FilmForm component.
  details = () => {
    console.log("This props history ", this.props.history);
    console.log();
    this.props.history.push("/Film"); //page 40
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ startDate: Number(this.state.startDate) });
    console.log("NEW FILM STATE: ", this.state);
    this.props.loadFilms(this.state);

    this.setState({
      filmName: " "
    });
  };

  // addFilm = () => {
  //   this.setState({
  //     films: [
  //       ...this.state.films,
  //       {
  //         title: null,
  //         imdbNumber: null,
  //         Territory: null,
  //         startDate: null,
  //         endDate: null
  //       }
  //     ]
  //   });
  // };

  render() {
    console.log("props films: ", this.props.films);

    return (
      <div>
        <GoBackSideButton path="/filmAgent/registeredAgent/rightOwner/RightOwner" />
        <h3>Right owner films</h3>
        return (
        <div>
          <div>
            <button className="to-side-right" onClick={this.details}>
              details
            </button>
          </div>
          <RightOwnerFilmsForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </div>
        <ul></ul>
        {this.props.films.map(film => (
          <li>{film.primaryTitle}</li>
        ))}
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    films: reduxState.films
  };
}

const mapDispatchToProps = { loadFilms };

export default connect(mapStateToProps, mapDispatchToProps)(RightOwnerFilms);
