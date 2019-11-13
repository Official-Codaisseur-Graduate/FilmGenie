// page 35

import React from 'react'

export default class TicketsSearchForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <label> City
              <input type='text' name='city' placeholder='City'></input>
            </label>
            <br />
            <label> Cinema
              <input type='text' name='cinema' placeholder='Cinema'></input>
            </label>
            <br />
            <label> Title
              <input type='text' name='title' placeholder='Title'></input>
            </label>
            <br />
            <label> Date
              <input type='date' name='date' placeholder='Date'></input>
            </label>
            <br />
            <label> Time
              <input type='time' name='time' placeholder='Time'></input>
            </label>
          </form>
        </div>
      </div>
    )
  }
}