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
                  <h5>Location</h5>
                  <p>{screening.location}</p>
                  <h5>Cinema</h5>
                  <p>{screening.cinemaName}</p>
                  <h5>Date</h5>
                  <p>{screening.date}</p>
                  <h5>Time</h5>
                  <p>{screening.time}</p>
                  <button>tickets</button>
                </div>
            </div>
          )
        })}
      </div>
    )
  }
}
