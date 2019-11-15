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
              <input type='text' name='hall_name' placeholder='Name'></input>
            <label>Seats</label>
             <input type='number' name='seats' placeholder='Seats'></input>
            <label>Projector ID</label>
             <input type='text' name='projector_id' placeholder='Projector ID'></input>
          </form>
        </div>

        <button>plus_sign</button>
      </div>
    )
  }
}