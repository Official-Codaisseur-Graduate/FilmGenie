// page 36

import React from 'react'
import CountryList from '../lists/CountryList'
import YearsList from '../lists/YearsList'


export default class ScreeningsOfSelectedFilmForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <label> Title
              <input type='text' name='title' placeholder='Title'></input>
            </label>
            <br />
            <label> Director
              <input type='text' name='director' placeholder='Director'></input>
            </label>
            <br />
            <label> Year
              <YearsList />
            </label>
            <br />
            <label> Country
              <CountryList />
            </label>
          </form>
        </div>
      </div>
    )
  }
}