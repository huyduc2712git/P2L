import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginFailure, loginStart, loginSuccess } from "./authSlice";
import { authRequest } from "@app/request/auth";

interface LoginPayload {
  username: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (
    { username, password, callback }: LoginPayload & { callback?: () => void },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(loginStart());
      const response = await authRequest.loginAccount(username, password);
      if (response) {
        dispatch(loginSuccess(response.token));
        if (callback) {
          callback();
        }
        return response.token;
      } else {
        throw new Error("No token received");
      }
    } catch (error: any) {
      dispatch(loginFailure(error?.message));
      return rejectWithValue(error?.message || "Failed to log in");
    }
  }
);
