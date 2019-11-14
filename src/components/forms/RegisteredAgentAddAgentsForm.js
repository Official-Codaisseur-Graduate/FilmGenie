// page: 15, 18, 21, 24

import React, { Component } from "react";
// import { connect } from 'react-redux'

export default class RegisteredAgentAddAgentsForm extends Component {
  agentType = type => {
    switch (type) {
      case "right owner agents":
        return "Right owner";
      case "film festival agents":
        return "Festival organization";
      case "cinema group agents":
        return "Cinema group";
      case "cinema agents":
        return "Cinema";
      default:
        return null;
    }
  };

  render() {
    const { type } = this.props;
    const nameAgent = this.agentType(type);

    return (
      <div>
        <h4>
          <em>{type}</em>
        </h4>
        <form>
          <div>
            {/* In administator there should be filled in data */}
            <label htmlFor="name">{nameAgent}</label>

            <input type="text" name="agent_type" placeholder="Name"></input>
            <label htmlFor="administrator">Administrator</label>
            <input type="text" name="full_name" placeholder="Full Name"></input>
            <label htmlFor="firstname"></label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
            ></input>
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
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
            ></input>
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
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
            ></input>
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

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(RegisteredAgentAddAgentsFor)
