// page to be filled

import React from "react";
import { connect } from "react-redux";
import GoBackSideButton from "../../UI/GoBackSideButton";

export class RightOwnerAddFilmsForm extends React.Component {
  render() {
    const filmId = this.props.match.params.filmId;
    const thisFilm = this.props.films.find(
      film => film.filmid === Number(filmId)
    );
    return (
      <div>
        <GoBackSideButton path="/filmAgent/registeredAgent/rightOwner/RightOwnerFilms" />
        <p>
          <strong>Title:</strong> {thisFilm.primaryTitle}
        </p>
        <p>
          <strong>Runtime:</strong> {thisFilm.runtimeminutes} minutes
        </p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    films: reduxState.films
  };
}

export default connect(mapStateToProps)(RightOwnerAddFilmsForm);
