import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestCurrentUser,
  requestLogin,
  requestLogout,
  requestRegister,
  setToken,
} from "../services/apiHerokuapp";

//Використовується у компоненті RegistrationForm на сторінці реєстрації
export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const response = await requestRegister(formData);

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

//Використовується у компоненті LoginForm на сторінці логіну
export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const response = await requestLogin(formData);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

//Використовується у компоненті UserMenu у шапці додатку.
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await requestLogout();
    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

//Використовується у компоненті App під час його монтування.
export const refresh = createAsyncThunk(
  "auth/refresh ",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    setToken(token);
    try {
      const response = await requestCurrentUser();
      console.log("response: ", response);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
