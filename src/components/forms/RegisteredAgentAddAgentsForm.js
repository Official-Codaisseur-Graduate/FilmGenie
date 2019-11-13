import React, { Component } from "react";
// import { connect } from 'react-redux'
import CountryList from "./CountryList";

export default class RegisteredAgentAddAgentsForm extends Component {
  render() {
    const { type } = this.props;
    return (
      <div>
        <form>
          <div>
            <label htmlFor="name">{type}</label>
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


// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(RegisteredAgentAddAgentsFor)