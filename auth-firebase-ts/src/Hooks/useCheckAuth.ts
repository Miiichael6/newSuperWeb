import { useAppSelector, useAppDispatch } from "../app/hooks/hooks";
import { useEffect, useState } from "react";
import { auth } from "../firebase/credentials";
import { onAuthStateChanged } from "firebase/auth";
import { thunkSetUserAuthenticated } from "../app/features/Auth/thunks";

const useCheckAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const authUser = useAppSelector((state) => state.authentication);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userOnline) => {
      if (userOnline || !userOnline) setIsLoading(false);
      if (userOnline) {
        dispatch(thunkSetUserAuthenticated(userOnline));
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user: authUser,
    isLoading,
  };
};

export default useCheckAuth;
