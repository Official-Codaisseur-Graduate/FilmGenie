//page 19

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import CinemaGroupCinemasForm from "../../../../forms/cinemaGroup/CinemaGroupCinemasForm"

export default class CinemaGroupCinemas extends React.Component {
  state = {
    cinemas: [{ name: null, city: null}]
  }

  addCinema = () => {
    this.setState({
      cinemas: [...this.state.cinemas, { name: null, city: null}]
    })
  }

  render() {
    const { cinemas } = this.state
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/cinemaGroup/CinemaGroup" />
      <h3>Cinema group cinemas</h3>
      {cinemas.map((cinema,index) => {
        return <div><p>Cinema {index +1}</p><CinemaGroupCinemasForm /></div>
      })}
      <button onClick={this.addCinema}>+</button>
    </div>)
  }
}