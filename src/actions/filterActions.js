import { ADD_FILTER, DEL_FILTER } from "./types";

export const addFilter = (userId) => (dispatch) => {
  dispatch({ type: ADD_FILTER, payload: userId });
};

export const delFilter = (userId) => (dispatch) => {
  dispatch({ type: DEL_FILTER, payload: userId });
};
