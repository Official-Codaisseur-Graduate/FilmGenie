// page 30

import React from 'react'

export default class CinemaHallsForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <label> Cinema
              <input type='text' name='cinema_name' placeholder='Name'></input>
            </label>
            <label> Hall 1
              <input type='text' name='hall_name' placeholder='Name'></input>
            </label>
            <label>
              <input type='number' name='seats' placeholder='Seats'></input>
            </label>
            <label>
              <input type='text' name='projector_id' placeholder='Projector ID'></input>
            </label>
          </form>
        </div>

        <button>plus_sign</button>

        <div>
          <form>
            <label> Hall 2
              <input type='text' name='hall_name' placeholder='Name'></input>
            </label>
            <label>
              <input type='number' name='seats' placeholder='Seats'></input>
            </label>
            <label>
              <input type='text' name='projector_id' placeholder='Projector ID'></input>
            </label>
          </form>
        </div>
      </div>
    )
  }
}

export default CinemaHallsForm