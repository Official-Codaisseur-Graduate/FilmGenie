// page 8

import React from "react";
import CountryList from "../../forms/lists/CountryList";

export default class CountryCityForm extends React.Component {
  state = {
    data: {
      city: null
    }
  };

  handleOnChange = event => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.props.onSubmit}>
            {/* Ideally, use some libraries for doing Country-state-city cascading dropdown */}
            <label>
              Country
              <CountryList />
            </label>
            <label>
              City
            </label>
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={this.handleOnChange}
            ></input>
            <button type="submit">Confirm</button>
          </form>
        </div>
      </div>
    );
  }
}
