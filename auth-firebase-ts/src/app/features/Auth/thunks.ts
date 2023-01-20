import { Dispatch } from "@reduxjs/toolkit";
import loginWithGoogle from "../../../firebase/functions/GoogleLogin";
import { login, logout, register } from "./authSlice";
import LogOutCurrentUser from "../../../firebase/functions/logout";
import registerFirebaseUser from "../../../firebase/functions/registerUser";
import LoginWithEmailPassword from "../../../firebase/functions/loginWithEmailAndPassoword";

export const thunkSetUserAuthenticated = (result: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const setToUser: any = {
        id: result.uid,
        displayName: result.displayName,
        email: result.email,
        photoURL: result.photoURL,
        errorMessage: false,
      };

      dispatch(login(setToUser));
    } catch (error) {}
  };
};

export const loginUser = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const result: any = await LoginWithEmailPassword(email, password);

      const setToUser: any = {
        id: result.id,
        displayName: result.displayName,
        email: result.email,
        photoURL: result.photoURL,
        errorMessage: false,
      };

      dispatch(login(setToUser));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const registerUser = (
  email: string,
  password: string,
  displayName: string
) => {
  return async (dispatch: Dispatch) => {
    try {
      const newUser: any = await registerFirebaseUser(
        email,
        password,
        displayName
      );

      const setToSet: any = {
        id: newUser.id,
        display: newUser.displayName,
        email: newUser.emael,
        photoURL: newUser.photoURL,
        errorMessage: false,
      };

      dispatch(register(setToSet));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const startSignInWithGoogle = () => {
  return async (dispatch: Dispatch) => {
    try {
      const result: any = await loginWithGoogle();

      if (!result.ok) dispatch(logout(result));
      if (result.ok) dispatch(login(result));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const logoutUser = () => {
  return async (dispatch: Dispatch) => {
    try {
      const result: any = await LogOutCurrentUser();
      dispatch(logout(result));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};
