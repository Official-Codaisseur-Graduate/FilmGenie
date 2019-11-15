// page 16

import React from 'react'
import FestivalOrganizationName from './FestivalOrganizationName'

export default class FilmFestivalEditionsForm extends React.Component {
  render() {
    return (
      <div>
        <FestivalOrganizationName />
        <div>
          <form>
            <label>Edition</label>
            <input type='text' name='description' placeholder='Description'></input>
            <label>Start date</label>
            <input type='date' name='start_date' placeholder='Start date'></input>
            <label>End date</label>
            <input type='date' name='end_date' placeholder='End date'></input>
            <button onClick={this.props.screenings}>screenings</button>
          </form>
        </div>
      </div>
    )
  }
}