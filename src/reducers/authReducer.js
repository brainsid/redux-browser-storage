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
          ...action.payload,
        };
      }
      return state;
    case "LOGOUT":
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
}
