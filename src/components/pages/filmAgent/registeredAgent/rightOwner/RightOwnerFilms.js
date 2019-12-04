//page 25

import React from "react";
import GoBackSideButton from "../../../../UI/GoBackSideButton";
import RightOwnerFilmsForm from "../../../../forms/rightOwner/RightOwnerFilmsForm";

import superagent from "superagent";

import { loadRightsOwnerFilmList } from "../../../../../actions/loadRightsOwnerFilmList";

import { loadSearchedFilms } from "../../../../../actions/fetchFilmDetails";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

class RightOwnerFilms extends React.Component {
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
    this.props.loadSearchedFilms(this.state);

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
  componentDidMount() {
    this.props.loadRightsOwnerFilmList();
  }
  render() {
    console.log("props films: ", this.props.films);

    return (
      <div>
        <GoBackSideButton path="/filmAgent/registeredAgent/rightOwner/RightOwner" />
        <h3>Right owner films</h3>

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
        {!this.props.films && <p>loading...</p>}
        {this.props.films.map(film => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid gold",
              padding: "5px",
              margin: "10px",
              borderRadius: "5px",
              background: "linear-gradient(45deg,#888,#aaa,#888)",
              backgroundColor: "#aaa"
            }}
          >
            <p
              style={{
                color: "white",
                paddingLeft: "35px",
                fontSize: "20px"
              }}
            >
              <strong>{film.primaryTitle}</strong>
            </p>

            <Link to={`/rightOwner/${1}/films/${film.filmid}/add`}>
              <button className="to-side-right">details</button>
            </Link>
          </div>
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



const mapDispatchToProps = { loadSearchedFilms,loadRightsOwnerFilmList  };


export default connect(mapStateToProps, mapDispatchToProps)(RightOwnerFilms);
