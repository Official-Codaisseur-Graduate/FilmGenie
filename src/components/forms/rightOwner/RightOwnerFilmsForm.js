// page 25

import React from "react";
import RightOwnerName from "./RightOwnerName";

//import loadFilms from "";


export default class RightOwnerFilmsForm extends React.Component {
  handleClick = () => {
    //loadFilms();
  };
  render() {
    return (
      <div>
        <RightOwnerName />
        <div>
          <form>

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
              name="film"
              placeholder="Enter film Name"
            ></input>
            <button onClick={() => this.handleClick()}>Search Films</button>


          </form>
        </div>
      </div>
    );
  }
}
