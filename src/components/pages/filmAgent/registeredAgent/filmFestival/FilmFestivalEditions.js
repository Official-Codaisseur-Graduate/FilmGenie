//page 16

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import FilmFestivalEditionsForm from "../../../../forms/filmFestival/FilmFestivalEditionsForm"

export default class FilmFestivalEditions extends React.Component {
  render() {
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/filmFestival/FilmFestival" />
      <h3>Film festival editions</h3>
      <FilmFestivalEditionsForm/>
    </div>)
  }
} 