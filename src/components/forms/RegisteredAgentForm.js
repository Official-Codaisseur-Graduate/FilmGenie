// page: 14, 17, 20, 23

import React, { Component } from "react";
import { connect } from 'react-redux'

class RegisteredAgentForm extends Component {
  agentType = type => {
    switch (type) {
      case "right owner":
        return "Right owner";
      case "film festival":
        return "Festival organization";
      case "cinema group":
        return "Cinema group";
      case "cinema":
        return "Cinema";
      default:
        return null;
    }
  };

  render() {
    const { type } = this.props;
    const nameAgent = agentType(type);

    return (
      <div>
        <form>
          <div>
            <label htmlFor="name">{nameAgent}
              <input type="text" name="agent_type" placeholder="Name"></input>
              </label>
            <button>details</button>
            <label htmlFor="login">Login
             <input type="text" name="fullname" placeholder="Full Name"></input>
             </label>
          </div>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisteredAgentForm)