import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { MovieDetailsList } from "../components/MovieDetailsList";
import { TMovieDetails, TTvShowDetails } from "../types/mediaTypes";
import { TvShowDetails } from "../components/TvShowDetails";

type TCommonDetails = {
  name?: string;
  original_title?: string;
  poster_path: string;
};

export const DetailsPage = () => {
  const data = useLoaderData();

  const { original_title, poster_path, name } = data as TCommonDetails;

  return (
    <div className="mediaDetailsPage">
      <h2>{original_title || name}</h2>
      <div className="mediaDetailsContainer">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={original_title || name}
        />
        {original_title ? (
          <MovieDetailsList data={data as TMovieDetails} />
        ) : (
          <TvShowDetails data={data as TTvShowDetails} />
        )}
      </div>
    </div>
  );
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
