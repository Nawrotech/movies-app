import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

type Props = {
  children: ReactNode;
};

export const ProtectingRoute = ({ children }: Props) => {
  const { user } = useAuth();

  if (!user?.guest_session_id) return <Navigate to="login" replace={true} />;

  return children;
};
