// page 25

import React from "react";
import RightOwnerName from "./RightOwnerName";
import { connect } from "react-redux";
import { loadFilms } from "../../../actions/fetchFilmDetails";

export default class RightOwnerFilmsForm extends React.Component {

  render() {
    return (
      <div>
        <RightOwnerName />
        <div>

          <form onSubmit={this.props.handleSubmit}>

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

              onChange={this.props.handleChange}     
            ></input>
      
            <button type="submit">Search Films</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { loadFilms })(RightOwnerFilmsForm);
