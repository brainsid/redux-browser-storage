import { act } from "react-dom/test-utils";

const initialState = {
  users: {},
  // id: [filter1, filter2],
  // 1: [filter3, filter4]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_FILTER":
      console.log("add filter");
      return {
        ...state,
        items: [...state.items, "filter"],
      };
    case "DEL_FILTER":
      console.log("remove filter");
      return {
        ...state,
        items: state.items.slice(0, state.items.length - 1),
      };
    case "LOGIN":
      if (!Object.keys(state).includes(action.payload)) {
        console.log("adding new id to state");
        return {
          ...state,
          [action.payload]: [],
        };
      }
      return state;

    default:
      return state;
  }
}
