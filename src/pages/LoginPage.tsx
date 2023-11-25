import { useLogIn } from "../features/auth/useLogIn";

export const LoginPage = () => {
  const { logInUser } = useLogIn();

  return (
    <div className="loginPage">
      <h1>Welcome! Log in by clicking button below</h1>
      <button onClick={() => logInUser()}>Log user In</button>
    </div>
  );
};
