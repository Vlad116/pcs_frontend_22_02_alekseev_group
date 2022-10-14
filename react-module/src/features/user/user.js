import { createSlice } from "@reduxjs/toolkit";
import { nanoid as uniqueId } from "nanoid";
import { getUsers, setUserToken, getUserToken } from "../../utils/lsHelpers";

const usersFromLS = getUsers() || [];
const tokenFromLS = getUserToken();

const initialState = {
  login: usersFromLS.find((value) => value.id === tokenFromLS)?.login || "",
  currentUserToken: tokenFromLS || "", // for storing the JWT
  users: usersFromLS,
  error: null,
  //   userInfo: {}, // for user object
  //   loading: false,
  //   success: false, // for monitoring the registration process.
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { login, password } = action.payload;

      const user = state.users.find((value) => value.login === login);

      if (user && user.password === password) {
        setUserToken(user.id);
        state.currentUserToken = user.id;
        state.login = user.login;
        state.error = "";
      } else if (user) {
        state.error = "Введен неверный пароль";
      } else {
        state.error = "Данный пользователь не найден";
      }
    },
    register: (state, action) => {
      const { login } = action.payload;

      const isDuplicateUser = state.users.find(
        (value) => value.login === login
      );

      const newUser = {
        ...action.payload,
        id: uniqueId(),
      };

      if (!isDuplicateUser) {
        const users = [...state.users, newUser];

        state.users = users;

        localStorage.setItem("users", JSON.stringify(users));

        setUserToken(newUser.id);
        state.login = newUser.login;
        state.currentUserToken = newUser.id;
        state.error = "";
      } else {
        state.error = `Пользователь с логином ${newUser.login} уже занят`;
      }
    },
    logout: (state) => {
      setUserToken("");
      state.currentUserToken = "";
      state.login = "";
    },
    errorReset: (state) => {
      console.log(state);
      state.error = "";
    },
  },
});

export const { login, register, errorReset, logout } = userSlice.actions;

export default userSlice.reducer;
