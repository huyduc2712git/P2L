import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { authRequest } from "@app/request/auth";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<string>) {
      console.log("state", state, action);
      state.loading = false;
      state.token = action.payload;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;

export const login =
  (username: string, password: string) => async (dispatch: any) => {
    try {
      dispatch(loginStart());
      const response = await authRequest.loginAccount(username, password);
      console.log("response", response);
      dispatch(loginSuccess(response.token));
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };
