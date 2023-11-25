import { ReactNode, createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export type TUser = {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
};

type TAuthContext = {
  user: TUser | null;
  setUser: React.Dispatch<React.SetStateAction<TUser | null>>;
};

const AuthContext = createContext({} as TAuthContext);

type Props = {
  children: ReactNode;
};

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useLocalStorage<TUser | null>("user", null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
