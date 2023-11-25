import { useEffect } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export const DetailsPage = () => {
  const data = useLoaderData();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div>DetailsPage</div>;
};

export function getMoviesDetails(movieId: string | undefined) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getTvShowsDetails(tvShowId: string | undefined) {
  return axios
    .get(
      `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message);
    });
}
