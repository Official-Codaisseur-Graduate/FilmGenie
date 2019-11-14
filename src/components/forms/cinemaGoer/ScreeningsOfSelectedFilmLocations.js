// page 36

import React from 'react'
import { data } from "../../../data/ScreeningsOfSelectedFilm"

export default class ScreeningsOfSelectedFilmLocations extends React.Component {
  
  render() {
    return (
      <div>
        {data.map((screening) => {
          return (
            <div>
                <div key={screening.id}>
                  <h3>Screening</h3>
                  <span>{screening.location}</span>
                  <span>{screening.cinemaName}</span>
                  <span>{screening.date}</span>
                  <span>{screening.time}</span>
                  <button>tickets</button>
                </div>
            </div>
          )
        })}
      </div>
    )
  }
}
