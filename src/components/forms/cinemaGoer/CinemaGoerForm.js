// page 8

import React from 'react'

export default class CinemaGoerForm extends React.Component {
  render() {
    return (
      <div>
        {/* data should come from database */}
        <div>
          <h5>First name</h5>
          <p>Rein</p>
        </div>
        <div>
          <h5>Last name</h5>
          <p>Op 't Land</p>
        </div>
        <div>
          <h5>City</h5>
          <p>Amsterdam</p>
        </div>
      </div>
    )
  }
}