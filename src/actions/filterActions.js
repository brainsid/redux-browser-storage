import { ADD_FILTER, DEL_FILTER } from "./types";

export const addFilter = (userId) => (dispatch) => {
  console.log("addding filter");
  // setExpireTime(userId);
  dispatch({ type: ADD_FILTER, payload: userId });
  const timout = setTimeout(
    () => dispatch({ type: "CLEAR_FILTERS", payload: userId }),
    5000
  );
  dispatch({ type: "SET_TIMOUT", payload: { userId, timout } });
};

export const delFilter = (userId) => (dispatch) => {
  dispatch({ type: DEL_FILTER, payload: userId });
  const timout = setTimeout(
    () => dispatch({ type: "CLEAR_FILTERS", payload: userId }),
    5000
  );
  dispatch({ type: "SET_TIMOUT", payload: { userId, timout } });
};

export const clearFilters = (userId) => (dispatch) => {
  dispatch({ type: "CLEAR_FILTERS", payload: userId });
};
