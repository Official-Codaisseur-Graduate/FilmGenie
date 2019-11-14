//page 40

import React from "react"
import FilmForm from "../forms/film/temp"
import GoBackButton from "../UI/GoBackButton";

export default class Film extends React.Component {
  render() {
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/rightOwner/RightOwnerFilms"/>
      <FilmForm/>
    </div>)
  }
} 