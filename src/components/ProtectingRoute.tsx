import { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { TUser } from "../context/authContext";

type Props = {
  children: ReactNode;
};

export const ProtectingRoute = ({ children }: Props) => {
  const { user } = useAuth() as TUser;

  useEffect(() => {
    console.log(user);
  }, []);

  if (!user) return <Navigate to="login" replace={true} />;

  return children;
};
