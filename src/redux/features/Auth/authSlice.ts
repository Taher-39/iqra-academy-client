import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TAuthState } from "../../../Types";


const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const UseCurrentToken = (state: RootState) => state.auth.token;
export const UseCurrentUser = (state: RootState) => state.auth.user;
