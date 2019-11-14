// page 40

import React from 'react'
// import CountryList from './'
// import YearsList from './'
// import GenreList from './'


export default class FilmForm extends React.Component {
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
            <br />
            <label> Actors
              <input type='text' name='actors' placeholder='Actors'></input>
            </label>
            <label> 
              <GenresList />
            </label>
            <label> Running Time
              <input type='number' name='running_time' placeholder='Minutes'></input>
            </label>
            <label> Etc.
              <input type='text' name='etc' placeholder='Etc.'></input>
            </label>
            <br />
            <label> IMDB Info
              <input type='text' name='imdb_info' placeholder='IMDB Info'></input>
            </label>
            <button>IMDB trailer</button>
            <br />
            <label> Local Info
              <input type='text' name='local_info' placeholder='Local Info'></input>
            </label>
            <label> Territory
              <input type='text' name='territory' placeholder='Territory'></input>
            </label>
            <button>local trailer</button>
          </form>
        </div>
      </div>
    )
  }
}