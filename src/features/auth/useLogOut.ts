import { useMutation } from "@tanstack/react-query";
import { logOutUser as logOutUserApi } from "../../services/authApi";
import { useAuth } from "../../context/authContext";

export const useLogOut = () => {
  const { setUser } = useAuth();

  const { mutate: logOutUser, isError } = useMutation({
    mutationFn: (userId: string) => logOutUserApi(userId),

    onSuccess: () => {
      setUser(null);
    },
    onError: () => {
      console.log("an error occurred");
    },
  });

  return { logOutUser, isError };
};
