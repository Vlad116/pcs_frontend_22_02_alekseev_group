import { createSlice } from "@reduxjs/toolkit";
import { nanoid as uniqueId } from "nanoid";
import { getUsers, setUserToken, getUserToken } from "../../utils/lsHelpers";

const tokenFromLS = getUserToken();

const initialState = {
  login: getUsers().find((value) => value.id === tokenFromLS)?.login || "",
  currentUserToken: tokenFromLS || "", // for storing the JWT
  users: getUsers() || [],
  //   userInfo: {}, // for user object
  //   loading: false,
  //   error: null,
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
      } else {
        // error
      }
      // проверяем юзера в LS и заходим, меняем initState
    },
    register: (state, action) => {
      const { login, password } = action.payload;

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
      } else {
        // error
        console.log(`login ${newUser.login} уже занят`);
      }

      // добавляем юзера в LS (?)
    },
    logout: (state) => {
      setUserToken("");
      state.currentUserToken = "";
      state.login = "";
    },
  },
});

export const { login, register, logout } = userSlice.actions;

export default userSlice.reducer;
