//page 9

import React from "react";
import NewAgentForm from "../../../forms/NewAgentForm";
import GoBackButton from "../../../UI/GoBackButton";

export default class NewRightOwner extends React.Component {
  render() {
    return (
      <div>
        <div>
          <GoBackButton path="/filmAgent/newAgent/NewFilmAgent" />

          <NewAgentForm type="right owner" />
        </div>
      </div>
    );
  }
}
