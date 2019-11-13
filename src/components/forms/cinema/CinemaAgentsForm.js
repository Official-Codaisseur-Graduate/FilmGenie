// page 21

import React from 'react'

export default class CinemaAgentsForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <label> Cinema
              <input type='text' name='cinema_name' placeholder='Name'></input>
            </label>
            <label> Administrator
              <input type='text' name='full_name' placeholder='Full name'></input>
            </label>
            <label>
              <input type='text' name='first_name' placeholder='First name'></input>
            </label>
            <label>
              <input type='text' name='last_name' placeholder='Last name'></input>
            </label>
            <label>
              <input type='text' name='job' placeholder='Job'></input>
            </label>
          </form>
        </div>

        <button>plus_sign</button>

        <div>
          <form>
            <label> Editor
              <input type='text' name='full_name' placeholder='Full name'></input>
            </label>
            <label>
              <input type='text' name='first_name' placeholder='First name'></input>
            </label>
            <label>
              <input type='text' name='last_name' placeholder='Last name'></input>
            </label>
            <label>
              <input type='text' name='job' placeholder='Job'></input>
            </label>
          </form>
        </div>

        <button>plus_sign</button>

        <div>
          <form>
            <label> Reader
              <input type='text' name='full_name' placeholder='Full name'></input>
            </label>
            <label>
              <input type='text' name='first_name' placeholder='First name'></input>
            </label>
            <label>
              <input type='text' name='last_name' placeholder='Last name'></input>
            </label>
            <label>
              <input type='text' name='job' placeholder='Job'></input>
            </label>
          </form>
        </div>
      </div>
    )
  }
}