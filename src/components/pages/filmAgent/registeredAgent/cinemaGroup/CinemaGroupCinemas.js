//page 19

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import CinemaGroupCinemasForm from "../../../../forms/cinemaGroup/CinemaGroupCinemasForm"

export default class CinemaGroupCinemas extends React.Component {
  render() {
    return (<div>
      <h3>Cinema group cinemas</h3>
      <GoBackButton path="/filmAgent/registeredAgent/cinemaGroup/CinemaGroup" />
      <CinemaGroupCinemasForm/>
    </div>)
  }
} 