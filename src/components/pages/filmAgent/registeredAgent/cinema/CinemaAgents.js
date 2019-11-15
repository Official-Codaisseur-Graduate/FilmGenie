//page 21

import React from "react"
import GoBackButton from "../../../../UI/GoBackButton";
import RegisteredAgentAddAgentsForm from "../../../../forms/RegisteredAgentAddAgentsForm"

export default class CinemaAgents extends React.Component {
  state = {
    administrators: [{ fullName: null, firstName: null, lastName: null, job: null }],
  }

  addAdministrator = () => {
    this.setState({
      administrators: [...this.state.administrators, { fullName: null, firstName: null, lastName: null, job: null }]
    })
  }
  
  render() {
    const { administrators } = this.state
    return (<div>
      <GoBackButton path="/filmAgent/registeredAgent/cinema/Cinema" />
      <h3>Cinema agents</h3>
      {administrators.map((administrator,index) => {
        return <div><p>Administrator {index +1}</p><RegisteredAgentAddAgentsForm type="cinema agents" /></div>
      })}
      <button onClick={this.addAdministrator}>+</button>
    </div>)
  }
}  
