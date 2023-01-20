import { auth } from "../credentials";
import {
  GoogleAuthProvider,
  signInWithPopup, // registro con ventana modal
} from "firebase/auth";

export default async function loginWithGoogle() {
  try {
    const googleProvider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, googleProvider);

    const currentAuthGoogle = result.user;

    if (!currentAuthGoogle)
      throw new Error("Error desconocido en la Autenticacion");

    const setUser = {
      ok: true,
      id: currentAuthGoogle.uid,
      displayName: currentAuthGoogle.displayName,
      email: currentAuthGoogle.email,
      photoURL: currentAuthGoogle.photoURL,
    };

    return setUser;
  } catch (error: any) {
    const codeErr = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage: `${errorMessage}, CodeErr: ${codeErr}`,
    };
  }
}
