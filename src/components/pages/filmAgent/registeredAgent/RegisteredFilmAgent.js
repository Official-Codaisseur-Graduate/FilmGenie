//page 6

import React from "react"
import LoginForm from "../../../forms/LoginForm"
import GoBackButton from "../../../UI/GoBackButton";

export default class RegisteredFilmAgent extends React.Component {
  state = {
    showButtonsMode: false
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      showButtonsMode: true
    })
  }

  rightOwner = () => {
    this.props.history.push("/filmAgent/registeredAgent/rightOwner/RightOwner") // page 23
  }

  filmFestival = () => {
    this.props.history.push("/filmAgent/registeredAgent/filmFestival/FilmFestival") // page 14
  }

  cinemaGroup = () => {
    this.props.history.push("/filmAgent/registeredAgent/cinemaGroup/CinemaGroup") // page 17
  }

  cinema = () => {
    this.props.history.push("/filmAgent/registeredAgent/cinema/Cinema") // page 20
  }

  render() {
    return (<div>
      <div>
      <GoBackButton path="/filmAgent/FilmAgentRegistration"/>
        <LoginForm onSubmit={this.onSubmit} />
      </div>
      {this.state.showButtonsMode === false ?
        <div>
        </div>
        :
        <div>
          <div>
          </div>
          <button onClick={this.rightOwner}>Right owner</button>
          <button onClick={this.filmFestival}>Film festival</button>
          <button onClick={this.cinemaGroup}>Cinema Group</button>
          <button onClick={this.cinema}>Cinema</button>
        </div>
      }

    </div>)
  }
} 
