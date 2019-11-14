// page 35

import React from 'react'

export default class TicketSearch extends React.Component {
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
          <h5>Title</h5>
          <p>Halloween</p>
        </div>
        <div>
          <h5>Date</h5>
          <p>15-11-2019</p>
        </div>
        <div>
          <h5>Time</h5>
          <p>18.30</p>
        </div>
      </div>
    )
  }
}