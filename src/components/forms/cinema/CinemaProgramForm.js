// page 22

import React from 'react'
import CinemaName from './CinemaName'

export default class CinemaProgramForm extends React.Component {
  render() {
    return (
      <div>
        <CinemaName />
        <div>
          <form>
            <label>Screening</label>
              <input type='text' name='title' placeholder='Title'></input>
            <label>Date</label>
              <input type='date' name='date' placeholder='Date'></input>
            <label>Time</label>
              <input type='time' name='time' placeholder='Time'></input>
            <label>Hall</label>
             <input type='text' name='hall' placeholder='Hall'></input>
            <label>Ticket type</label>
              <input type='text' name='ticket_type' placeholder='Ticket type'></input>
          </form>
          <button onClick={this.props.accessControl}>Access control</button>
        </div>
      </div>
    )
  }
}