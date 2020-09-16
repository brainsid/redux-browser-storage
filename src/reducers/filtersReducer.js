const initialState = {
  items: [],
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
    default:
      return state;
  }
}
