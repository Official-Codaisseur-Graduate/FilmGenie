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
                  <h3>Screening</h3>
                  <span>{screening.title}</span>
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