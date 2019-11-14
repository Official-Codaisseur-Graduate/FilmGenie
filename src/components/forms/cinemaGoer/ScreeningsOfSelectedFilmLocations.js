// page 36

import React from 'react'

export default class ScreeningsOfSelectedFilmLocations extends React.Component {
  render() {

    return (
      <div>
        {this.props.screenings.map((screening) => {
          return (
            <div>
                <div key={screening.id}>
                  <h3>Screening</h3>
                  <p>{screening.city}</p>
                  <p>{screening.cinema}</p>
                  <p>{screening.date}</p>
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
