import { ADD_FILTER, REMOVE_FILTER } from "./types";

export const addFilter = () => (dispatch) => {
  dispatch({ type: ADD_FILTER });
};
