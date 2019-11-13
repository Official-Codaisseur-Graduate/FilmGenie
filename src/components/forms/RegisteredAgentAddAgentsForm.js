// page: 15, 18, 21, 24

import React, { Component } from "react";
import { connect } from 'react-redux'

class RegisteredAgentAddAgentsForm extends Component {
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
            <label htmlFor="name">{nameAgent}</label>
              <input type="text" name="agent_type" placeholder="Name"></input>
            <label htmlFor="administrator">Administrator</label>
             <input type="text" name="full_name" placeholder="Full Name"></input>
            <label htmlFor="firstname"></label>
              <input type="text" name="firstname" placeholder="First Name"></input>
            <label htmlFor="lastname"></label>
              <input type="text" name="lastname" placeholder="Last Name"></input>
            <label htmlFor="job"></label>
             <input type="text" name="job" placeholder="Job"></input>
          </div>

          <button>plus_sign</button>

          <div>
          <label htmlFor="editor">Editor</label>
             <input type="text" name="full_name" placeholder="Full Name"></input>
            <label htmlFor="firstname"></label>
              <input type="text" name="firstname" placeholder="First Name"></input>
            <label htmlFor="lastname"></label>
              <input type="text" name="lastname" placeholder="Last Name"></input>
            <label htmlFor="job"></label>
             <input type="text" name="job" placeholder="Job"></input>
          </div>

          <button>plus_sign</button>

          <div>
          <label htmlFor="editor">Reader</label>
             <input type="text" name="full_name" placeholder="Full Name"></input>
            <label htmlFor="firstname"></label>
              <input type="text" name="firstname" placeholder="First Name"></input>
            <label htmlFor="lastname"></label>
              <input type="text" name="lastname" placeholder="Last Name"></input>
            <label htmlFor="job"></label>
             <input type="text" name="job" placeholder="Job"></input>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisteredAgentAddAgentsForm)