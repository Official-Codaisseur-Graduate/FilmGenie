import React, { Component } from "react";
// import { connect } from "react-redux";

export default class AccessControl extends Component {
  render() {
    const { type } = this.props;
    return (
      <div>
        <div>
          <h3>
            <em>{type}</em>
          </h3>
          <div>
            <h4>Cinema</h4>
            <div>
              <p>Name</p>
              <p>Hall</p>
            </div>
          </div>
          <div>
            <h4>Screening</h4>
            <div>
              <p>Title</p>
              <p>Play date/time</p>
            </div>
          </div>
          <div className="QR-code">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
              alt="QR-code"
              width="200px"
            />
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(AccessControl);
