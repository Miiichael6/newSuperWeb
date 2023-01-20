import { useState } from "react";
import loginWithGoogle from "../firebase/functions/GoogleLogin";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks/hooks";
import { registerUser } from '../app/features/Auth/thunks';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.authentication);
  const [form, setForm] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const values = Object.values(form).map((value) => value.trim());

    if (values.includes("")) {
      console.log("datos incompletos");
      return;
    }

    const { email, password } = form;
    // dispatch(registerUser(email, password));
  };

  return (
    <form
      className="p-5 bg-gray-900 text-white w-full sm:w-1/2 rounded-md"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <h1>Formulario Login</h1>

        <div>
          <label htmlFor="">Email: </label>
          <input
            type="email"
            name="email"
            className="border-2 border-stone-900 text-black rounded-md p-1  block w-full"
            onChange={(e) => handleChange(e)}
            placeholder="email"
          />
        </div>
        <div>
          <label htmlFor="">Password: </label>
          <input
            type="password"
            name="password"
            className="border-2 text-black border-stone-900 rounded-md p-1 block w-full"
            placeholder="password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex justify-between">
          <input
            type="submit"
            value="Iniciar Sesión"
            className="py-1 px-4 bg-slate-800 rounded-sm font-bold my-3 cursor-pointer"
          />
          <button
            onClick={() => loginWithGoogle()}
            type="button"
            className="py-1 px-4 bg-cyan-500 rounded-sm font-bold my-3"
          >
            Google
          </button>
        </div>
        <div>
          <p className="text-sm">
            Aún o tienes Cuenta?
            <span className="inline-block ml-1 hover:underline">
              <Link to="/register">registrate</Link>
            </span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
