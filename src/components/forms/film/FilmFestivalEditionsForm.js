// page 16

import React from 'react'

export default class FilmFestivalEditionsForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <label> Festival organization
              <input type='text' name='festival_organization_name' placeholder='Name'></input>
            </label>
            <label> 1st Edition
              <input type='text' name='description' placeholder='Description'></input>
            </label>
            <label>
              <input type='date' name='start_date' placeholder='Start date'></input>
            </label>
            <label>
              <input type='date' name='end_date' placeholder='End date'>
              </input>
            </label>
            <button>screenings</button>
          </form>
        </div>

        <button>plus_sign</button>

        <div>
          <form>
            <label> Edition
              <input type='text' name='description' placeholder='Description'></input>
            </label>
            <label>
              <input type='date' name='start_date' placeholder='Start date'></input>
            </label>
            <br />
            <label>
              <input type='date' name='end_date' placeholder='End date'></input>
            </label>
          </form>
        </div>
      </div>
    )
  }
}

export default FilmFestivalEditionsForm