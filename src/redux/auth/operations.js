import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestCurrentUser,
  requestLogin,
  requestLogout,
  requestRegister,
  setToken,
} from "../services/apiHerokuapp";

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

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await requestLogout();
    return;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const refresh = createAsyncThunk(
  "auth/refresh ",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    setToken(token);
    try {
      const response = await requestCurrentUser();

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) return false;
      return true;
    },
  }
);
