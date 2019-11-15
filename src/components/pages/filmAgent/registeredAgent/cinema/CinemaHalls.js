//page 30

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import CinemaHallsForm from "../.../../../../../forms/cinema/CinemaHallsForm"


export default class CinemaHalls extends React.Component {
  state = {
    halls: [{ hallname: null, seats: null, projectorID: null }]
  }

  addHall = () => {
    this.setState({
      halls: [...this.state.halls, { hallname: null, seats: null, projectorID: null }]
    })
  }
  
  render() {
    const { halls } = this.state
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/cinema/Cinema" />
      <h3>Cinema halls</h3>
      {halls.map((hall,index) => {
        return <div><p>Hall {index +1}</p><CinemaHallsForm/></div>
      })}
      <button onClick={this.addHall}>+</button>
    </div>)
  }
} 