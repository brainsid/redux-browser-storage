import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/filterActions";

class Login extends Component {
  state = {
    username: "",
    password: "",
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
        <button onClick={() => this.props.login(this.state)}>Login</button>
      </div>
    );
  }
}

const mapDispathcToProps = {
  login,
};

export default connect(null, mapDispathcToProps)(Login);
