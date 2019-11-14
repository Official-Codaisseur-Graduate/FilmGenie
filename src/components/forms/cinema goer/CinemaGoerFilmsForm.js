// page 37

import React from 'react'
// import CountryList from './'
// import YearsList from './'
// import GenreList from './'


export default class CinemaGoerFilmsForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <label> Title
              <input type='text' name='title' placeholder='Title'></input>
            </label>
            <label> Director
              <input type='text' name='director' placeholder='Director'></input>
            </label>
            <label> Year
              <YearsList />
            </label>
            <label> Country
              <CountryList />
            </label>
            <label> Running Time
              <input type='number' name='running_time' placeholder='Minutes'></input>
            </label>
            <br />
            <label> Actors
              <input type='text' name='actors' placeholder='Actors'></input>
            </label>
            <br />
            <label> 
              <GenresList />
            </label>
            <label> Etc.
              <input type='text' name='etc' placeholder='Etc.'></input>
            </label>
            <button>search/filter</button>
            <button>local trailer</button>
          </form>
        </div>
      </div>
    )
  }
}