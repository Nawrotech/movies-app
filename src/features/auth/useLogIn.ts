import { useMutation } from "@tanstack/react-query";
import { logInUser as logInUserApi } from "../../services/authApi";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export const useLogIn = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const { mutate: logInUser, data } = useMutation({
    mutationFn: logInUserApi,
    onSuccess: (data) => {
      setUser(data);
      navigate("/");
    },
    onError: () => {
      console.log("an error occurred");
    },
  });

  return { data, logInUser };
};
