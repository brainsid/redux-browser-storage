import React from "react";
import { connect } from "react-redux";

const Filters = ({ filters, addFilter, delFilter }) => {
  return (
    <div>
      <h1>Filters:</h1>
      <ul>{filters && filters.map((filter) => <li>filter</li>)}</ul>
      <button onClick={addFilter}>Add Filter</button>
      <button onClick={delFilter}>Remove Filter</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filter.items,
});

const mapDispathcToProps = (dispatch) => ({
  addFilter: () => dispatch({ type: "ADD_FILTER" }),
  delFilter: () => dispatch({ type: "DEL_FILTER" }),
});

export default connect(mapStateToProps, mapDispathcToProps)(Filters);
