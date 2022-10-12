const getUsers = () => JSON.parse(localStorage.getItem("users"));

const getUserToken = () => localStorage.getItem("userToken");

const setUserToken = (token) => localStorage.setItem("userToken", token);
// const registerUser = localStorage.setItem()

export { getUsers, getUserToken, setUserToken };
