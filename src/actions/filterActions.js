import { ADD_FILTER } from "./types";

// export function addFilter() {
//   return function (dispatch) {};
// }

// same with ES6
export const addFilter = (filter) => (dispatch) => {
  dispatch({ type: ADD_FILTER, payload: filter });
};
