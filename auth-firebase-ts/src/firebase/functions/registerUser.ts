import { auth } from "../credentials";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// Metodo de Registro con Email y Contraseña
export default async function registerFirebaseUser(
  email: string,
  password: string,
  displayName: string
) {
  try {
    const userCreate = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const currentUser = userCreate.user;
    if (!currentUser) {
      throw new Error("Error desconocido al crear una Cuenta");
    }
    await updateProfile(currentUser, { displayName });

    const setUser = {
      id: currentUser?.uid,
      display: currentUser?.displayName || "sin Nombre",
      email: currentUser?.email,
      photoURL: currentUser?.photoURL || "sin photo",
      errorMessage: false,
    };

    return setUser;
  } catch (error: any) {
    console.error(error.message);
    if (error.code === "auth/weak-password") {
      return "password is too short, try another more long, please";
    } else if (error.code === "auth/email-already-in-use") {
      return "the email is already try another please";
    } else if (error.code === "auth/invalid-email") {
      return "the email is invalid ,please try another";
    } else if (error.code === "auth/internal-error") {
      return "We are sorry a unkwon error happen";
    } else if (error.code === "auth/missing-email") {
      return "please enter a email, the input is empty";
    }
  }
}
