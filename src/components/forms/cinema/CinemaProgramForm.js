// page 22

import React from 'react'

export default class CinemaProgramForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <label> Cinema
              <input type='text' name='cinema_name' placeholder='Name'></input>
            </label>
            <label> Screening 1
              <input type='text' name='title' placeholder='Title'></input>
            </label>
            <label>
              <input type='date' name='play_date' placeholder='Play date'></input>
            </label>
            <label>
              <input type='time' name='time' placeholder='Time'></input>
            </label>
            <label>
              <input type='text' name='hall' placeholder='Hall'></input>
            </label>
            <label>
              <input type='text' name='screening_ticket_types' placeholder='Screening ticket types'></input>
            </label>
          </form>
          <button onClick={this.props.accessControl}>Access control</button>
        </div>

        <button>plus_sign</button>

        <div>
          <form>
          <label> Screening 2
              <input type='text' name='title' placeholder='Title'></input>
            </label>
            <label>
              <input type='date' name='play_date' placeholder='Play date'></input>
            </label>
            <label>
              <input type='time' name='time' placeholder='Time'></input>
            </label>
            <label>
              <input type='text' name='hall' placeholder='Hall'></input>
            </label>
            <label>
              <input type='text' name='screening_ticket_types' placeholder='Screening ticket types'></input>
            </label>
          </form>
        </div>
      </div>
    )
  }
}