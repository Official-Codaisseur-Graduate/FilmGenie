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
            <label> Hall
              <input type='text' name='hall_name' placeholder='Name'></input>
            </label>
            <label> Seats
              <input type='number' name='seats' placeholder='Seats'></input>
            </label>
            <label> Projector ID
              <input type='text' name='projector_id' placeholder='Projector ID'></input>
            </label>
          </form>
        </div>

        <button>plus_sign</button>

        <div>
          <form>
            <label> Hall
              <input type='text' name='hall_name' placeholder='Name'></input>
            </label>
            <label> Seats
              <input type='number' name='seats' placeholder='Seats'></input>
            </label>
            <label> Projector ID
              <input type='text' name='projector_id' placeholder='Projector ID'></input>
            </label>
          </form>
        </div>
      </div>
    )
  }
}