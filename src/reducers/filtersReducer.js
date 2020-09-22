const initialState = {
  // id: [filter1, filter2],
  // 1: [filter3, filter4]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_FILTER":
      console.log("add filter");
      return {
        ...state,
        [action.payload]: [...state[action.payload], "filter"],
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
