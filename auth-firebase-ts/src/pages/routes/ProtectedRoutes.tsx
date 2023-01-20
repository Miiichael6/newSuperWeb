import { Navigate, Outlet } from "react-router-dom";
import LoginLoader from "../../components/LoginLoader";
import useCheckAuth from "../../Hooks/useCheckAuth";

const ProtectedRoutes = () => {
  const { user, isLoading } = useCheckAuth();

  if (isLoading) return <LoginLoader />;

  return user.id ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
