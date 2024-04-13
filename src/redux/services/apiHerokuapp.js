import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = ``;
};

export const requestRegister = async (formData) => {
  const { data } = await instance.post("/users/signup", formData);
  setToken(data.token);
  return data;
};

export const requestLogin = async (formData) => {
  const { data } = await instance.post("/users/login", formData);
  setToken(data.token);

  return data;
};

export const requestCurrentUser = async () => {
  const { data } = await instance.get("/users/current");
  return data;
};

export const requestLogout = async () => {
  const { data } = await instance.post("/users/logout");
  return data;
};
