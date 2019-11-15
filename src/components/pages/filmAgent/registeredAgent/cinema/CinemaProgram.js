//page 22

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import CinemaProgramForm from "../.../../../../../forms/cinema/CinemaProgramForm"

export default class CinemaProgram extends React.Component {
  state = {
    screenings: [{ title: null, date: null, time: null, hall: null, ticket_type: null }]
  }

  addScreening = () => {
    this.setState({
      screenings: [...this.state.screenings, { title: null, date: null, time: null, hall: null, ticket_type: null }]
    })
  }
  
  accessControl = () => {
    this.props.history.push("/filmAgent/AccessControl") //page 38
  }

  render() {
    const { screenings } = this.state
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/cinema/Cinema" />
      <h3>Cinema program</h3>
      {screenings.map((screening,index) => {
        return <div><p>Screening {index +1}</p><CinemaProgramForm accessControl={this.accessControl}/></div>
      })}
      <button onClick={this.addScreening}>+</button>
    </div>)
  }
} 