// page 40

import React from 'react'
import CountryList from '../lists/CountryList'
import YearsList from '../lists/YearsList'
import GenresList from '../lists/GenresList'


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
            <label> 
              <input type='text' name='imdb_info' placeholder='Imdb Info'></input>
            </label>
            <button>Imdb trailer</button>
            <br />
            <label> 
              <input type='text' name='local_info' placeholder='Local Info'></input>
            </label>
            <label> 
              <input type='text' name='territory' placeholder='Territory'></input>
            </label>
            <button>local trailer</button>
          </form>
        </div>
      </div>
    )
  }
}