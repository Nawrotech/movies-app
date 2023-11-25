import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const MainPage = () => {
  const data = useLoaderData();

  const { user } = useAuth();

  useEffect(() => {
    console.log(data);
    console.log(user);
  }, [user]);

  return <div></div>;
};
