import axios from "axios";

export const userRegister = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/auth/userregister`, user);

export const userLogin = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/auth/userlogin`, user);
