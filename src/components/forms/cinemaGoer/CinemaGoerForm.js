// page 8

import React from 'react'

export default class CinemaGoerForm extends React.Component {
  render() {
    return (
      <div>
        <div>
        {/* clarify if this form is needed */}
          <form> 
            <label> Full Name
              <input type='text' name='fullname' placeholder='Full Name'></input>
            </label>
            <br />
            <label> First Name
              <input type='text' name='firstname' placeholder='First Name'></input>
            </label>
            <br />
            <label> Last Name
              <input type='text' name='lastname' placeholder='Last Name'></input>
            </label>
            <br />
            <label> City
              <input type='text' name='City' placeholder='City'></input>
            </label>
            <br />
            <label> E-mail address
              <input type='text' name='email' placeholder='E-mail address'></input>
            </label>
            <br />
            <label> Password
              <input type='text' name='password' placeholder='Password'></input>
            </label>
          </form>
        </div>
      </div>
    )
  }
}