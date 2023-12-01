import { useLogIn } from "../features/auth/useLogIn";

export const LoginPage = () => {
  const { logInUser } = useLogIn();

  return (
    <div className="loginPage">
      <h1 className="loginPage__heading">
        Welcome! Log in by clicking button below
      </h1>
      <button className="loginPage__button" onClick={() => logInUser()}>
        Log user In
      </button>
    </div>
  );
};
