// page: 14, 17, 20, 23

import React, { Component } from "react";
//import { connect } from 'react-redux'

export default class RegisteredAgentForm extends Component {
  agentType = type => {
    switch (type) {
      case "right owner":
        return "Right owner name";
      case "film festival":
        return "Festival organization name";
      case "cinema group":
        return "Cinema group name";
      case "cinema":
        return "Cinema name";
      default:
        return null;
    }
  };

  render() {
    const { type } = this.props;
    const nameAgent = this.agentType(type);

    return (
      <div>
        <form>
          <div>
            <label htmlFor="name">{nameAgent}</label>
            {/* The name should be passed down to this component! We are now only displaying nameAgent */}
          
              {/* <input type="text" name="agent_type" placeholder="Name"></input> */}
            {/* <label htmlFor="login">Login</label> */}
              {/* <input
                type="text"
                name="fullname"
                placeholder="Full Name"
              ></input> */}
          </div>
        </form>
        <button className="to-side-right" onClick={this.props.details}>details</button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(RegisteredAgentForm)
