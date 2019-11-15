import React, { Component } from "react";
// import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import CountryList from "./lists/CountryList";

class NewAgentForm extends Component {
  handleSubmit = event => {
    event.preventDefault();

    this.props.history.push("/filmAgent/registeredAgent/RegisteredFilmAgent");
  };

  getNameLabel = type => {
    switch (type) {
      case "right owner":
        return "Company";
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
    const nameLabel = this.getNameLabel(type);

    return (
      <div>
        <h3>New {type}</h3>
        <form onSubmit={this.handleSubmit}>
          <h5>{nameLabel}</h5>
          <div className="inputs">
            <div>
              <label htmlFor="address1">Address 1</label>
              <input type="text" name="address1" placeholder="Address"></input>
            </div>
            <div>
              <label htmlFor="2">Address 2</label>
              <input type="text" name="2" placeholder="Address 2"></input>
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input type="text" name="city" placeholder="City"></input>
            </div>
            <div>
              <label htmlFor="postcode">Postcode</label>
              <input type="text" name="postcode" placeholder="Postcode"></input>
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <CountryList />
            </div>
            <div>
              <label htmlFor="region">Region</label>
              <input type="text" name="region" placeholder="Region"></input>
            </div>
            <div>
              <label htmlFor="telephone">Telephone</label>
              <input
                type="text"
                name="telephone"
                placeholder="Telephone"
              ></input>
            </div>
            <div>
              <label htmlFor="email">E-mail address</label>
              <input
                type="email"
                name="email"
                placeholder="E-mail address"
              ></input>
            </div>
            <div>
              <label htmlFor="iban">IBAN</label>
              <input type="text" name="iban" placeholder="IBAN"></input>
            </div>
          </div>
          <h5>Administrator</h5>
          <div className="inputs">
            <div>
              <label htmlFor="fullname">Full name</label>
              <input
                type="text"
                name="fullname"
                placeholder="Full name"
              ></input>
            </div>
            <div>
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                name="firstname"
                placeholder="First name"
              ></input>
            </div>
            <div>
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
              ></input>
            </div>
            <div>
              <label htmlFor="job">Job</label>
              <input type="text" name="job" placeholder="Job"></input>
            </div>
            <div>
              <label htmlFor="telephone">Telephone</label>
              <input
                type="text"
                name="telephone"
                placeholder="Telephone"
              ></input>
            </div>
            <div>
              <label htmlFor="email">E-mail address</label>
              <input
                type="email"
                name="email"
                placeholder="E-mail address"
              ></input>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
              ></input>
            </div>
          </div>
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default withRouter(NewAgentForm);

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(NewAgentForm)
