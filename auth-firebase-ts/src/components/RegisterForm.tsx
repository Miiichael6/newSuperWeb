import { useState } from "react";
import { logoutUser } from "../app/features/Auth/thunks";
import loginWithGoogle from "../firebase/functions/GoogleLogin";
import registerUser from "../firebase/functions/registerUser";
import { useAppDispatch } from '../app/hooks/hooks';

const RegisterForm = () => {
  const dispatch = useAppDispatch()
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

    const { email, password, displayName } = form;
    registerUser(email, password, displayName);
  };

  return (
    <form
      className="p-5 bg-gray-900 text-white w-full sm:w-1/2 rounded-md"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <h1>Formulario</h1>
        <div>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="displayName"
            className="border-2 border-stone-900 text-black rounded-md p-1 block w-full"
            onChange={(e) => handleChange(e)}
            placeholder="nombre"
          />
        </div>
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
        <div className="flex justify-around">
          <input
            type="submit"
            value="Ingresar"
            className="py-1 px-4 bg-slate-800 rounded-md font-bold my-3"
          />

          <button
            type="button"
            className="py-1 px-4 bg-red-800 rounded-md font-bold my-3"
            onClick={() => dispatch(logoutUser())}
          >
            Logout
          </button>

          <button
            onClick={() => loginWithGoogle()}
            type="button"
            className="py-1 px-4 bg-cyan-800 rounded-md font-bold my-3"
          >
            Google
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
