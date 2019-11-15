//page 40

import React from "react"
import FilmForm from "../forms/film/FilmForm"
import GoBackSideButton from "../UI/GoBackSideButton";

export default class Film extends React.Component {
  render() {
    return (<div>
      <GoBackSideButton path="/filmAgent/registeredAgent/rightOwner/RightOwnerFilms"/>
      <FilmForm/>
    </div>)
  }
} 