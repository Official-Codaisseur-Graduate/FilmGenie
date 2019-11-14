// page 32

import React from 'react'

export default class ScreeningsSearch extends React.Component {
  render() {
    return (
      <div>
        {/* data should come from database */}
        <div>
          <h5>City</h5>
          <p>Amsterdam</p>
        </div>
        <div>
          <h5>Cinema</h5>
          <p>Pathe Munt</p>
        </div>
        <div>
          <h5>Date</h5>
          <p>15-11-2019</p>
        </div>
        <div>
          <h5>Film Festival</h5>
          <p>Film Genie Festival</p>
        </div>
      </div>
    )
  }
}