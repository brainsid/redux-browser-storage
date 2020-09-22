import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Filters from "./components/Filters";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Switch>
              <Route name="login" exact path="/" component={Login} />
              <Route
                name="dashboard"
                exact
                path="/dashboard"
                component={Filters}
              />
              <Filters />
            </Switch>
          </header>
        </Router>
      </div>
    );
  }
}

export default App;
