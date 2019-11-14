//page 25

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import RightOwnerFilmsForm from "../../../../forms/rightOwner/RightOwnerFilmsForm"

export default class RightOwnerFilms extends React.Component {
  render() {
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/rightOwner/RightOwner" />
      <h3>Right owner films</h3>
      <RightOwnerFilmsForm/>
    </div>)
  }
} 