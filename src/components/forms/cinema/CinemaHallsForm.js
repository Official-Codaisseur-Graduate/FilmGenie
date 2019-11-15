// page 30

import React from 'react'
import CinemaName from './CinemaName'

export default class CinemaHallsForm extends React.Component {
  render() {
    return (
      <div>
        <CinemaName />
        <div>
          <form>
            <label>Hall</label>
              <input type='text' name='hallname' placeholder='Name'></input>
            <label>Seats</label>
             <input type='number' name='seats' placeholder='Seats'></input>
            <label>Projector ID</label>
             <input type='text' name='projectorID' placeholder='Projector ID'></input>
          </form>
        </div>
      </div>
    )
  }
}