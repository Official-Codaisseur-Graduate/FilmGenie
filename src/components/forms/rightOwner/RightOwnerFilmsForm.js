// page 25

import React from 'react'
import RightOwnerName from './RightOwnerName'

export default class RightOwnerFilmsForm extends React.Component {
  render() {
    return (
      <div>
        <RightOwnerName />
        <div>
          <form>
            <label>Title</label>
            <input type='text' name='title' placeholder='Title'></input>
            <label>IMDB Number</label>
            <input type='text' name='imdb_number' placeholder='IMDB Number'></input>
            <label>Territory</label>
            <input type='text' name='territory' placeholder='Territory'></input>
            <label>Start date</label>
            <input type='date' name='start_date' placeholder='Start date'></input>
            <label>End date</label>
            <input type='date' name='end_date' placeholder='End date'></input>
            <button className="to-side-right" onClick={this.props.details}>details</button>
          </form>
        </div>

        <button>plus_sign</button>

      </div>
    )
  }
}