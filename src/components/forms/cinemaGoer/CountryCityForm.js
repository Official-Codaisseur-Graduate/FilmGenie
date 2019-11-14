// page 8

import React from 'react'
import CountryList from '../../forms/lists/CountryList'

export default class CountryCityForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.props.onSubmit}>
            <label> Country
              <CountryList />
            </label>
            <label> City
              <input type='text' name='city' placeholder='City'></input>
            </label>
            <button type="submit">Confirm</button>
          </form>
        </div>
      </div>
    )
  }
}