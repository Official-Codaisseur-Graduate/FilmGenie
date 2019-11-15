// page 33

import React from 'react'
import FestivalOrganizationName from './FestivalOrganizationName'

export default class FilmFestivalScreeningsForm extends React.Component {
  render() {
    return (
      <div>
        <FestivalOrganizationName />
        <p><i>Edition number</i></p>
        <div>
          <form>
            <label>Screening</label>
            <input type='text' name='title' placeholder='Title'></input>
            <label>Date</label>
            <input type='text' name='date' placeholder='Date'></input>
            <label>Time</label>
            <input type='date' name='time' placeholder='Time'></input>
            <label>Cinema hall</label>
            <input type='date' name='cinema_hall' placeholder='Cinema hall'></input>
            <label>Ticket type</label>
            <input type='date' name='ticket_type' placeholder='Ticket type'></input>
            <button onClick={this.props.screenings}>Access Control</button>
          </form>
        </div>
      </div>
    )
  }
}