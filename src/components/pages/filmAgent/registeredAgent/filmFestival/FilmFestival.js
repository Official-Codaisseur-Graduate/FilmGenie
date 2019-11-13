//page 14

import React from "react"
import ChoiceButtons from "../../../../UI/ChoiceButtons"

export default class FilmFestival extends React.Component {
  agents = () => {
    this.props.history.push("/filmAgent/registeredAgent/filmFestival/FilmFestivalAgents") //page 15
  }
  
  editions = () => {
    this.props.history.push("/filmAgent/registeredAgent/filmFestival/FilmFestivalEditions") //page 16
  }
  
    render() {
      const choice1 = {
        name: "agents",
        action: this.agents
      };
      const choice2 = {
        name: "editions",
        action: this.editions
      };
      return (<div>
        <div>
          <h3>Film festival</h3>
          
          {/* Here will come a form */}
  
          <ChoiceButtons choice1={choice1} choice2={choice2} />
        </div>
      </div>)
    }
  } 