import { auth } from "../credentials";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginWithEmailPassword = async (email: string, password: string) => {
  try {
    const usuario = await signInWithEmailAndPassword(auth, email, password);

    const currentUser = usuario.user;

    if (!currentUser) {
      throw new Error("Error desconocido en la autenticación");
    }

    const setUser = {
      id: currentUser?.uid,
      displayName: currentUser?.displayName || "sin Nombre",
      email: currentUser?.email,
      photoURL: currentUser,
      errorMessage: false
    };

    return setUser;
  } catch (error: any) {
    if (error.code === "auth/user-not-found") {
      return "this account does not exist";
    } else if (error.code === "auth/invalid-email") {
      return "Invalid Email, try again please";
    } else if (error.code === "auth/wrong-password") {
      return "Incorrect password, try again";
    } else if (error.code === "auth/internal-error") {
      return "We are sorry a unkwon error happen";
    }
  }
};

export default LoginWithEmailPassword;
