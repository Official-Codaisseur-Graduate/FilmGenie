// page 19

import React from 'react'
import CinemaGroupName from './CinemaGroupName'

export default class CinemaGroupCinemasForm extends React.Component {
  render() {
    return (
      <div>
        <CinemaGroupName />
        <div>
          <form>
            <label>Cinema</label>
              <input type='text' name='name' placeholder='Name'></input>
            <label>City</label>
              <input type='text' name='city' placeholder='City'></input>
          </form>
        </div>
      </div>
    )
  }
}