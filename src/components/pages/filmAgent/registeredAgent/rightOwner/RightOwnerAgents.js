//page 24

import React from "react";
import GoBackButton from "../../../../UI/GoBackButton";
import RegisteredAgentAddAgentsForm from "../../../../forms/RegisteredAgentAddAgentsForm";
import fetchMock from "fetch-mock";
import Timeout from "await-timeout";

export default class RightOwnerAgents extends React.Component {
  state = {
    administrators: [
      { fullName: null, firstName: null, lastName: null, job: null }
    ]
  };

  componentDidMount() {
    /* function makeRequest() {
      return fetch(
        "http://filmgenie.com/api/FilmGenie//GetRightownerAgentById?rightownerid=2"
      ).then(function(response) {
        return response.json();
      });
    }
    fetchMock.mock(
      "http://filmgenie.com/api/FilmGenie//GetRightownerAgentById?rightownerid=2",
      [{ id: 1, firstName: "Lavanya" }],
      {
        delay: 1000 // fake a slow network
      }
    );
    makeRequest().then(function(data) {
      console.log("got data", data);
    });
    fetch(
      "http://filmgenie.com/api/FilmGenie//GetRightownerAgentById?rightownerid=2"
    ); */
  }

  addAdministrator = () => {
    this.setState({
      administrators: [
        ...this.state.administrators,
        { fullName: null, firstName: null, lastName: null, job: null }
      ]
    });
  };
  agentData = { fullname: "Agent-1" };

  render() {
    const { administrators } = this.state;
    return (
      <div>
        <h3>List of agents</h3>

        <GoBackButton path="/filmAgent/registeredAgent/rightOwner/RightOwner" />
        <h3>Right owner agents</h3>
        {administrators.map((administrator, index) => {
          return (
            <div>
              <p>Administrator {index + 1}</p>
              <RegisteredAgentAddAgentsForm type="right owner agents" />
            </div>
          );
        })}
        <button onClick={this.addAdministrator}>+</button>
      </div>
    );
  }
}
