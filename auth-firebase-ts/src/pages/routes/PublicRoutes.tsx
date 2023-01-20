import { Outlet, Navigate } from "react-router-dom";
import LoginLoader from "../../components/LoginLoader";
import useCheckAuth from "../../Hooks/useCheckAuth";

const PublicRoutes = () => {
  const { user, isLoading } = useCheckAuth();

  if (isLoading) return <LoginLoader />;

  console.log(user)

  return user.id ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoutes;
