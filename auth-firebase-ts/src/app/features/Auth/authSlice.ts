import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./auth.interface";

const initialState: AuthState = {
  status: "checking...",
  id: "",
  email: "",
  displayName: "",
  photoURL: "",
  errorMessage: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.ok = true;
      state.status = "authenticated";
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
      state.errorMessage = false;
    },
    register: (state, action: PayloadAction<AuthState>) => {
      state.ok = true;
      state.status = "authenticated";
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
      state.errorMessage = false;
    },
    logout: (state, action: PayloadAction<AuthState>) => {
      console.log("Aqui")
      state.status = "not-authenticated";
      state.id = "";
      state.displayName = "";
      state.email = "";
      state.photoURL = "";
      state.errorMessage = action.payload.errorMessage;
    },
  },
});

export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;
