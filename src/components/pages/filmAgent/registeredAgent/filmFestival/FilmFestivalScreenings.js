//page 33

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";

export default class FilmFestivalScreenings extends React.Component {
  accessControl = () => {
    this.props.history.push("/filmAgent/AccessControlContainer") //page 38
  }
 
  render() {
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/filmFestival/FilmFestivalEditions"/>
    {/* <form accessControl={this.accessControl}/> */}
    </div>)
  }
} 