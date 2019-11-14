//page 23

import React from "react"
import ChoiceButtons from "../../../../UI/ChoiceButtons";

export default class RightOwner extends React.Component {
agents = () => {
  this.props.history.push("/filmAgent/registeredAgent/rightOwner/RightOwnerAgents") //page 24
}

films = () => {
  this.props.history.push("/filmAgent/registeredAgent/rightOwner/RightOwnerFilms") //page 25
}

  render() {
    const choice1 = {
      name: "agents",
      action: this.agents
    };
    const choice2 = {
      name: "films",
      action: this.films
    };
    return (<div>
      <div>
        <h3>Right owner</h3>
        
        {/* Here will come a form */}

        <ChoiceButtons choice1={choice1} choice2={choice2} />
      </div>
    </div>)
  }
} 