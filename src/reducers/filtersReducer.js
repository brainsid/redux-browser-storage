const initialState = {
  filters: {},
  // id: [filter1, filter2],
  // 1: [filter3, filter4]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload]: [...state.filters[action.payload], "filter"],
        },
      };
    case "DEL_FILTER":
      console.log("remove filter");
      return {
        ...state,
        [action.payload]: state[action.payload].slice(
          0,
          state[action.payload].length - 1
        ),
      };

    default:
      return state;
  }
}
