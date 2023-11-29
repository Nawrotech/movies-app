import axios from "axios";

export function getTrendingTvShows() {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getTrendingMovies() {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getPoster(posterPath: string) {
  axios
    .get(`https://image.tmdb.org/t/p/original/${posterPath}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

type RateMovieParams = {
  movieId: number;
  userId: string | undefined;
  rating: number;
};

export function rateMovie(params: RateMovieParams) {
  return axios
    .post(
      `https://api.themoviedb.org/3/movie/${
        params.movieId
      }/rating?guest_session_id=${params.userId}&api_key=${
        import.meta.env.VITE_API_KEY
      }`,
      {
        value: params.rating,
      }
    )
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getRatedMovies(userId: string | undefined) {
  return axios
    .get(
      `https://api.themoviedb.org/3/guest_session/${userId}/rated/movies?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function rateTvShow(params: RateMovieParams) {
  return axios
    .post(
      `https://api.themoviedb.org/3/tv/${
        params.movieId
      }/rating?guest_session_id=${params.userId}&api_key=${
        import.meta.env.VITE_API_KEY
      }`,
      {
        value: params.rating,
      }
    )
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getRatedTvShows(userId: string | undefined) {
  return axios
    .get(
      `https://api.themoviedb.org/3/guest_session/${userId}/rated/tv?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}
