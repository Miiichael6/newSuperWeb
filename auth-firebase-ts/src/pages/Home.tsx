import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../app/features/Auth/thunks";
import { useAppDispatch, useAppSelector } from "../app/hooks/hooks";

const Home = () => {
  const currentUser = useAppSelector((state) => state.authentication);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cerrarSesion = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const { email, displayName, ok } = currentUser;

  return (
    <div className="min-h-screen">
      <h1>
        Hola {displayName} {ok!.toString()}
      </h1>
      <p>con el email : {email}</p>
      <button
        className="py-1 px-2 bg-red-600 text-white font-bold rounded-lg"
        onClick={() => cerrarSesion()}
      >
        Logout
      </button>

      <div>
        <Link
          to="/profile"
          className="bg-slate-900 text-white py-1 px-2 rounded-md"
        >
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Home;
