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
            <label> Screening
              <input type='text' name='title' placeholder='Title'></input>
            </label>
            <label> Date
              <input type='date' name='date' placeholder='Date'></input>
            </label>
            <label> Time
              <input type='time' name='time' placeholder='Time'></input>
            </label>
            <label> Hall
              <input type='text' name='hall' placeholder='Hall'></input>
            </label>
            <label> Ticket type
              <input type='text' name='ticket_type' placeholder='Ticket type'></input>
            </label>
          </form>
          <button>Access control</button>
        </div>

        <button>plus_sign</button>

        <div>
          <form>
          <label> Screening
              <input type='text' name='title' placeholder='Title'></input>
            </label>
            <label> Date
              <input type='date' name='date' placeholder='Date'></input>
            </label>
            <label> Time
              <input type='time' name='time' placeholder='Time'></input>
            </label>
            <label> Hall
              <input type='text' name='hall' placeholder='Hall'></input>
            </label>
            <label> Ticket type
              <input type='text' name='ticket_type' placeholder='Ticket type'></input>
            </label>
          </form>
        </div>
      </div>
    )
  }
}