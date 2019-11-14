// page 36

import React from 'react'

export default class ScreeningsOfSelectedFilm extends React.Component {
  render() {
    return (
      <div>
        {/* data should come from database */}
        <div>
          <h5>Title</h5>
          <p>Halloween</p>
        </div>
        <div>
          <h5>Director</h5>
          <p>Othmar Sweers</p>
        </div>
        <div>
          <h5>Year</h5>
          <p>2012</p>
        </div>
        <div>
          <h5>Country</h5>
          <p>Netherlands</p>
        </div>
      </div>
    )
  }
}