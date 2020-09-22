import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleClick = () => {
    const user = this.props.login(this.state);
    user && this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div>
        Username:
        <input
          name="username"
          onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
          type="text"
        />
        Password:
        <input
          name="password"
          onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
          type="password"
        />
        <button onClick={this.handleClick}>Login</button>
      </div>
    );
  }
}

const mapDispathcToProps = {
  login,
};

export default connect(null, mapDispathcToProps)(withRouter(Login));
