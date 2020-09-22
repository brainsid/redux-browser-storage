import { ADD_FILTER } from "./types";
import users from "./users.json";

export const addFilter = () => (dispatch) => {
  dispatch({ type: ADD_FILTER });
};

export const login = (userObj) => (dispatch) => {
  console.log("Login action!!");
  console.log(users);
  const user = users.filter(
    (user) =>
      userObj.username === user.username && userObj.password === user.password
  )[0];
  console.log(user);
  user && dispatch({ type: "LOGIN", payload: user.id });
};
