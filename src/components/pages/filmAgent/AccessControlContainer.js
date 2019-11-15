//page 38

import React from "react"
import AccessControl from "../../AccessControl"
import GoBackSideButton from "../../UI/GoBackSideButton";

export default class AccessControlContainer extends React.Component {
  render() {
    return (<div>
      <GoBackSideButton path="/filmAgent/registeredAgent/RegisteredFilmAgent" />
      <AccessControl type="access control"/>
    </div>)
  }
} 