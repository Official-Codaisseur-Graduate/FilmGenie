//page 25

import React from "react"
import GoBackSideButton from "../../../../UI/GoBackSideButton";
import RightOwnerFilmsForm from "../../../../forms/rightOwner/RightOwnerFilmsForm"

export default class RightOwnerFilms extends React.Component {
  details = () => {
    this.props.history.push("/Film") //page 40
  }
  
  render() {
    return (<div>
      <GoBackSideButton path="/filmAgent/registeredAgent/rightOwner/RightOwner" />
      <h3>Right owner films</h3>
      <RightOwnerFilmsForm details={this.details}/>
    </div>)
  }
}  