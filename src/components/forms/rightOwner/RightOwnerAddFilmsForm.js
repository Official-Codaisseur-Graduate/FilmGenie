// page to be filled

import React from "react";
import { connect } from "react-redux";
import GoBackSideButton from "../../UI/GoBackSideButton";
import { addRights } from "../../../actions/addRights";
import CountryList from "../lists/CountryList";
import "../../../css/form.css";

export class RightOwnerAddFilmsForm extends React.Component {
  state = {
    startDate: "",
    endDate: "",
    territory: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.addRights(this.state);

    this.setState({
      startDate: "",
      endDate: "",
      territory: ""
    });
  };

  render() {
    const filmId = this.props.match.params.filmId;
    const thisFilm = this.props.films.find(
      film => film.filmid === Number(filmId)
    );
    return (
      <div>
        <GoBackSideButton path="/filmAgent/registeredAgent/rightOwner/RightOwnerFilms" />
        <div className="filmToAddDetails">
          <p>
            <strong>Title:</strong> {thisFilm.primaryTitle}
          </p>
          <p>
            <strong>Runtime:</strong> {thisFilm.runtimeminutes} minutes
          </p>
        </div>
        <br />
        <div className="filmToAddDetails">
          <h2>Add rights to this film</h2>
          <form onSubmit={this.onSubmit}>
            <label>Start date:</label>
            <input
              name="startDate"
              type="date"
              value={this.state.name}
              onChange={this.onChange}
            />
            <label>End date:</label>
            <input
              name="endDate"
              type="date"
              value={this.state.name}
              onChange={this.onChange}
            />
            <br />
            <label>Territory:</label>
            {/* <CountryList /> */}
            <input
              name="territory"
              type="text"
              placeholder="put dropdown here"
              value={this.state.name}
              onChange={this.onChange}
            />
            <button type="submit">Add rights</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    films: reduxState.films
  };
}

const mapDispatchToProps = { addRights };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightOwnerAddFilmsForm);
