//page 16

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import FilmFestivalEditionsForm from "../../../../forms/filmFestival/FilmFestivalEditionsForm"

export default class FilmFestivalEditions extends React.Component {
  state = {
    editions: [{ description: null, startDate: null, endDate: null }]
  }

  screenings = () => {
    this.props.history.push("/filmAgent/registeredAgent/filmFestival/FilmFestivalScreenings") //page 33
  }

  addEdition = () => {
    this.setState({
      editions: [...this.state.editions, { description: null, startDate: null, endDate: null }]
    })
  }

  render() {
    const { editions } = this.state
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/filmFestival/FilmFestival" />
      <h3>Film festival editions</h3>
      {editions.map((edition,index) => {
        return <div><p>Edition {index +1}</p><FilmFestivalEditionsForm screenings={this.screenings} /></div>
      })}
      <button onClick={this.addEdition}>+</button>
    </div>)
  }
} 