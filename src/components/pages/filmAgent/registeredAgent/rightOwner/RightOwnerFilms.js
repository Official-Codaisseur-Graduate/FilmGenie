//page 25

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import RightOwnerFilmsForm from "../../../../forms/rightOwner/RightOwnerFilmsForm"

export default class RightOwnerFilms extends React.Component {
  details = () => {
    this.props.history.push("/Film") //page 40
  }
  
  render() {
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/rightOwner/RightOwner" />
      <h3>Right owner films</h3>
      <RightOwnerFilmsForm details={this.details}/>
    </div>)
  }
}  