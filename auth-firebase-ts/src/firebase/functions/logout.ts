import { auth } from "../credentials";
import { signOut } from "firebase/auth";

export default async function LogOutCurrentUser() {
  try {
    await signOut(auth);

    if(!auth.currentUser) {
      return {
        ok: true,
        errorMessage: false
      }
    }

  } catch (error: any) {
    return {
      ok: false,
      errorMessage: error.message,
    }
  }
}
