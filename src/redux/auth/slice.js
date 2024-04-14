import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register, refresh } from "../auth/operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      //LOGIN
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      //LOGOUT
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(logout.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      //REFRESH
      .addCase(refresh.pending, (state) => {
        state.isRefreshing = true;
        state.isError = null;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refresh.rejected, (state) => {
        state.isRefreshing = false;
        state.isError = true;
      });
    // TODO: addMatcher
  },
});

export const authReducer = authSlice.reducer;
