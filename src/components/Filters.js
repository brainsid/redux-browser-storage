import React from "react";
import { connect } from "react-redux";
import { addFilter, delFilter } from "../actions/filterActions";
import { logout } from "../actions/authActions";
import { useHistory } from "react-router-dom";

const Filters = ({ filters, user, addFilter, delFilter, logout }) => {
  let history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  return (
    <div>
      <h1>Hello {user.username && user.username.toUpperCase()}!</h1>
      <button onClick={() => handleLogout()}>Logout</button>
      <h1>Your filters:</h1>
      <ul>
        {filters &&
          filters[user.id] &&
          filters[user.id].map((filter) => <li>{filter}</li>)}
      </ul>
      <button onClick={() => addFilter(user.id)}>Add Filter</button>
      <button onClick={() => delFilter(user.id)}>Remove Filter</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filter.filters,
  user: state.user.user,
});

const mapDispathcToProps = {
  addFilter,
  delFilter,
  logout,
};

export default connect(mapStateToProps, mapDispathcToProps)(Filters);
