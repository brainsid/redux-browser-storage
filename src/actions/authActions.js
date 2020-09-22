import users from "./users.json";

export const login = (userObj) => (dispatch) => {
  const user = users.filter(
    (user) =>
      userObj.username === user.username && userObj.password === user.password
  )[0];
  user && dispatch({ type: "LOGIN", payload: user });
  return user;
};

export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};
