// page 32

import React from 'react'

export default class ScreeningResults extends React.Component {
  render() {
    return (
      <div>
        {this.props.screenings.map((screening) => {
          return (
            <div>
                <div key={screening.id}>
                  <p>{screening.title}</p>
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