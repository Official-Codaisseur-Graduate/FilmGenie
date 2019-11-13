// page 8

import React from 'react'
// import CountryList from './'

export default class CinemaGoerForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <label> 
              <input type='text' name='fullname' placeholder='Full Name'></input>
            </label>
            <br />
            <label> 
              <input type='text' name='firstname' placeholder='First Name'></input>
            </label>
            <br />
            <label>
              <input type='text' name='lastname' placeholder='Last Name'></input>
            </label>
            <br />
            <label>
              <input type='text' name='City' placeholder='City'></input>
            </label>
            <br />
            <label>
              <input type='text' name='email' placeholder='E-mail address'></input>
            </label>
            <br />
            <label>
              <input type='text' name='password' placeholder='Password'></input>
            </label>
            <br />
            <label>
              <CountryList />
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