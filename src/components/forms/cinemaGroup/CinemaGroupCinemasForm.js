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
            <label> Cinema
              <input type='text' name='name' placeholder='Name'></input>
            </label>
            <label> City
              <input type='text' name='city' placeholder='City'></input>
            </label>
          </form>
        </div>

        <button>plus_sign</button>

        <div>
          <form>
            <label> Cinema
                <input type='text' name='name' placeholder='Name'></input>
              </label>
              <label> City
                <input type='text' name='city' placeholder='City'></input>
              </label>
          </form>
        </div>
      </div>
    )
  }
}