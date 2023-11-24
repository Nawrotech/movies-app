import { ReactNode, createContext, useContext, useState } from "react";

export type TUser = {
  user: string | null;
};

const AuthContext = createContext<null | TUser>(null);

type Props = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<string | null>("michas");

  const values = {
    user,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}
