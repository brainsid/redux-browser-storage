const initialState = {
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      if (!Object.keys(state).includes(action.payload)) {
        console.log("adding new id to state");
        return {
          ...state,
          user: action.payload,
        };
      }
      return state;
    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
}
