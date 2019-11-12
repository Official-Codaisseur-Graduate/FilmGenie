import React, { Component } from "react";
import CountryList from "./CountryList";

export class NewAgentForm extends Component {
  render() {
    const { type } = this.props;
    return (
      <div>
        <form>
          <div>
            <h3>{type}</h3>
            <label htmlFor="address1">Address 1</label>
            <input type="text" name="address1"></input>
            <label htmlFor="2">Address 2</label>
            <input type="text" name="2"></input>
            <label htmlFor="city">City</label>
            <input type="text" name="city"></input>
            <label htmlFor="postcode">Postcode</label>
            <input type="text" name="postcode"></input>
            <label htmlFor="country">Country</label>
            <CountryList />
            <label htmlFor="region">Region</label>
            <input type="text" name="region"></input>
            <label htmlFor="telephone">Telephone</label>
            <input type="text" name="telephone"></input>
            <label htmlFor="email">E-mail address</label>
            <input type="email" name="email"></input>
            <label htmlFor="iban">Iban</label>
            <input type="text" name="iban"></input>
          </div>
          <div>
            <h3>Administrator</h3>
            <label htmlFor="fullname">Full name</label>
            <input type="text" name="fullname"></input>
            <label htmlFor="firstname">First name</label>
            <input type="text" name="firstname"></input>
            <label htmlFor="lastname">Last name</label>
            <input type="text" name="lastname"></input>
            <label htmlFor="job">Job</label>
            <input type="text" name="job"></input>
            <label htmlFor="telephone">Telephone</label>
            <input type="text" name="telephone"></input>
            <label htmlFor="email">E-mail address</label>
            <input type="email" name="email"></input>
            <label htmlFor="password">Password</label>
            <input type="password" name="password"></input>
          </div>
          <button>Register</button>
        </form>
      </div>
    );
  }
}
