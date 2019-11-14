// page 32

import React from 'react'

export default class ScreeningsSearchForm extends React.Component {
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
            <label> Date
              <input type='date' name='date' placeholder='Date'></input>
            </label>
            <br />
            <label> Film Festival
              <input type='text' name='festival' placeholder='Name'></input>
            </label>
          </form>
        </div>
      </div>
    )
  }
}