// page 25

import React from 'react'
import RightOwnerName from './RightOwnerName'

export default class RightOwnerFilmsForm extends React.Component {
  render() {
    return (
      <div>
        <RightOwnerName />
        <div>
          <form>
            <label> Title
              <input type='text' name='title' placeholder='Title'></input>
            </label>
            <label> IMDB Number
              <input type='text' name='imdb_number' placeholder='IMDB Number'></input>
            </label>
            <label> Territory
              <input type='text' name='territory' placeholder='Territory'></input>
            </label>
            <label> Start date
              <input type='date' name='start_date' placeholder='Start date'></input>
            </label>
            <label> End date
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
            <label> IMDB Number
              <input type='text' name='imdb_number' placeholder='IMDB Number'></input>
            </label>
            <label> Territory
              <input type='text' name='territory' placeholder='Territory'></input>
            </label>
            <label> Start date
              <input type='date' name='start_date' placeholder='Start date'></input>
            </label>
            <label> End date
              <input type='date' name='end_date' placeholder='End date'></input>
            </label>
          </form>
        </div>
      </div>
    )
  }
}