import { useLogOut } from "../features/auth/useLogOut";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const Navigation = () => {
  const { logOutUser } = useLogOut();
  const { user } = useAuth();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex-container">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/rated/movies">Rated</NavLink>

          <button
            className="logOutBtn"
            onClick={() =>
              user?.guest_session_id && logOutUser(user?.guest_session_id)
            }
          >
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
};
