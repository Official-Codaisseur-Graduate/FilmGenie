// page 25

import React from "react";
import RightOwnerName from "./RightOwnerName";
import { connect } from "react-redux";
import { loadFilms } from "../../../actions/fetchFilmDetails";

class RightOwnerFilmsForm extends React.Component {
  state = {
    filmName: ""
  };
  handleClick = event => {
    event.preventDefault();
    console.log("testing: ", this.state.filmName);
    this.props.loadFilms(this.state.filmName);
  };
  onChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <RightOwnerName />
        <div>
          <form onSubmit={this.handleClick}>
            {/*  <label>Title</label>
            <input type='text' name='title' placeholder='Title'></input>

            <label>Title</label>
            <input type="text" name="title" placeholder="Title"></input>

            <label>IMDB Number</label>
            <input
              type="text"
              name="imdbNumber"
              placeholder="IMDB Number"
            ></input>
            <label>Territory</label>
            <input type="text" name="territory" placeholder="Territory"></input>
            <label>Start date</label>
            <input
              type="date"
              name="startDate"
              placeholder="Start date"
            ></input>
            <label>End date</label>

            <input type='date' name='endDate' placeholder='End date'></input>
            <button className="to-side-right" onClick={this.props.details}>details</button>
 */}

            <input
              type="text"
              name="filmName"
              placeholder="Enter film Name"
              onChange={event => this.onChange(event)}
            ></input>
            <button type="submit">Search Films</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { loadFilms })(RightOwnerFilmsForm);
