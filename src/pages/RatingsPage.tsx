import React from "react";
import axios from "axios";
import { useAuth } from "../context/authContext";

export const RatingsPage = () => {
  const { user } = useAuth();

  return <section>RatingsPage</section>;
};

export function getRatedMovies(userId: string) {
  return axios
    .get(
      `https://api.themoviedb.org/3/guest_session/${user}/rated/movies?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
