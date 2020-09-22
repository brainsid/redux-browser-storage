const initialState = {
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      if (!Object.keys(state).includes(action.payload)) {
        return {
          ...state,
          user: { ...action.payload },
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
