// page 32

import React from 'react'
import { data } from '../../../data/Screenings'

export default class ScreeningResults extends React.Component {
  
  render() {
    return (
      <div>
        {data.map((screening) => {
          return (
            <div>
                <div key={screening.id}>
                  <h5>Title</h5>
                  <p>{screening.title}</p>
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