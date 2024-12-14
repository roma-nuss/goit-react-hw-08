import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handleAuthFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.error = null;
};

const handleAuthRejected = (state, { payload }) => {
  state.error = payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, handleAuthFulfilled)
      .addCase(register.rejected, handleAuthRejected)
      .addCase(login.fulfilled, handleAuthFulfilled)
      .addCase(login.rejected, handleAuthRejected)
      .addCase(logout.fulfilled, (state) => {
        Object.assign(state, {
          user: { name: null, email: null },
          token: null,
          isLoggedIn: false,
          error: null,
        });
      })
      .addCase(logout.rejected, handleAuthRejected)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
