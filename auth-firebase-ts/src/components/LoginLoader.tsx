import css from "../styles/LaoderLogin.module.css";

const LoginLoader = () => {
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <span className={css.loader}></span>
    </div>
  );
};

export default LoginLoader;
