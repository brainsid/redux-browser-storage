const initialState = {
  // id: timout,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_TIMOUT":
      const { userId, timout } = action.payload;
      if (!Object.keys(state).includes(userId)) {
        // Clean old timout on every new filter added
        clearTimeout(state[userId]);
      }
      return {
        ...state,
        [userId]: timout, // set new timout for user
      };
    default:
      return state;
  }
}
