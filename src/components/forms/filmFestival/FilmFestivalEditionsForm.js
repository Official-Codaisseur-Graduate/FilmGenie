// page 16

import React from 'react'
import FestivalOrganizationName from './FestivalOrganizationName'

export default class FilmFestivalEditionsForm extends React.Component {
  render() {
    return (
      <div>
        <FestivalOrganizationName />
        <div>
          <form>
            <label> 1st Edition
              <input type='text' name='description' placeholder='Description'></input>
            </label>
            <label> Start Date
              <input type='date' name='start_date' placeholder='Start date'></input>
            </label>
            <label> End Date
              <input type='date' name='end_date' placeholder='End date'>
              </input>
            </label>
            <button onClick={this.props.screenings}>screenings</button>
          </form>
        </div>

        <button>plus_sign</button>

        <div>
          <form>
            <label> Edition
              <input type='text' name='description' placeholder='Description'></input>
            </label>
            <label> Start date
              <input type='date' name='start_date' placeholder='Start date'></input>
            </label>
            <br />
            <label> End date
              <input type='date' name='end_date' placeholder='End date'></input>
            </label>
          </form>
        </div>
      </div>
    )
  }
}