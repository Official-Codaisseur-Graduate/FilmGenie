//page 16

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import FilmFestivalEditionsForm from "../../../../forms/filmFestival/FilmFestivalEditionsForm"

export default class FilmFestivalEditions extends React.Component {
  screenings = () => {
    this.props.history.push("/filmAgent/registeredAgent/filmFestival/FilmFestivalScreenings") //page 33
  }

  render() {
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/filmFestival/FilmFestival" />
      <h3>Film festival editions</h3>
      <FilmFestivalEditionsForm screenings={this.screenings}/>
    </div>)
  }
} 