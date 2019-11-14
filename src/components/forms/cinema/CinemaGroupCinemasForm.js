// page 19

import React from 'react'

export default class CinemaGroupCinemasForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <label> Cinema group
              <input type='text' name='cinema_group_name' placeholder='Name'></input>
            </label>
            <label> Cinema 1
              <input type='text' name='name' placeholder='Name'></input>
            </label>
            <label>
              <input type='text' name='city' placeholder='City'></input>
            </label>
          </form>
        </div>

        <button>plus_sign</button>

        <div>
          <form>
            <label> Cinema 2
                <input type='text' name='name' placeholder='Name'></input>
              </label>
              <label>
                <input type='text' name='city' placeholder='City'></input>
              </label>
          </form>
        </div>
      </div>
    )
  }
}