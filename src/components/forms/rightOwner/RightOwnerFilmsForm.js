// page 25

import React from 'react'

export default class RightOwnerFilmsForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <label> Right owner
              <input type='text' name='right_owner_name' placeholder='Name'></input>
            </label>
            <label> Title
              <input type='text' name='title' placeholder='Title'></input>
            </label>
            <label>
              <input type='text' name='imdb_number' placeholder='Imdb Number'></input>
            </label>
            <label>
              <input type='text' name='territory' placeholder='Territory'></input>
            </label>
            <label>
              <input type='date' name='start_date' placeholder='Start date'></input>
            </label>
            <label>
              <input type='date' name='end_date' placeholder='End date'></input>
            </label>
            <button>details</button>
          </form>
        </div>

        <button>plus_sign</button>

        <div>
          <form>
            <label> Title
              <input type='text' name='title' placeholder='Title'></input>
            </label>
            <label>
              <input type='text' name='imdb_number' placeholder='Imdb Number'></input>
            </label>
            <label>
              <input type='text' name='territory' placeholder='Territory'></input>
            </label>
            <label>
              <input type='date' name='start_date' placeholder='Start date'></input>
            </label>
            <label>
              <input type='date' name='end_date' placeholder='End date'></input>
            </label>
          </form>
        </div>
      </div>
    )
  }
}