const initialState = {
  // id: [filter1, filter2],
  // 1: [filter3, filter4]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_FILTER":
      return {
        ...state,
        [action.payload]: state[action.payload]
          ? [...state[action.payload], "filter"]
          : ["filter"],
      };
    case "DEL_FILTER":
      return {
        ...state,
        [action.payload]: state[action.payload].slice(
          0,
          state[action.payload].length - 1
        ),
      };
    case "CLEAR_FILTERS":
      const userId = action.payload;
      return {
        ...state,
        [userId]: [],
      };
    default:
      return state;
  }
}
