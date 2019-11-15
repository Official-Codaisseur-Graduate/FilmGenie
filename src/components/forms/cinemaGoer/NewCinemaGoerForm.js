//page 34

import React, { Component } from "react";
// import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

class NewCinemaGoerForm extends Component {
  handleSubmit = event => {
    event.preventDefault();

    this.props.history.push(
      "/cinemaGoer/registeredCinemaGoer/RegisteredCinemaGoer"
    );
  };

  render() {
    return (
      <div>
        <h4>
          <em>New cinema-goer</em>
        </h4>
        <form onSubmit={this.handleSubmit}>
          <h5>Film consumer</h5>
          <label htmlFor="fullname">Full name</label>
          <input type="text" name="fullname" placeholder="Full name"></input>
          <label htmlFor="city">City</label>
          <input type="text" name="city" placeholder="City"></input>
          <label htmlFor="email">E-mail address</label>
          <input type="email" name="email" placeholder="E-mail address"></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(NewCinemaGoerForm)

export default withRouter(NewCinemaGoerForm);
