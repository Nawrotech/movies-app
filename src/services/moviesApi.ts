import axios from "axios";

export function getTrendingTvShows() {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export function getTrendingMovies() {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export function getPoster(posterPath: string) {
  axios
    .get(`https://image.tmdb.org/t/p/original/${posterPath}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export function rateMovie(userId: string, rating: number) {
  axios
    .post(
      `https://api.themoviedb.org/3/movie/670292/rating?guest_session_id=${userId}&api_key=${
        import.meta.env.VITE_API_KEY
      }`,
      {
        value: rating,
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export function getRatedMovies(userId: string) {
  return axios
    .get(
      `https://api.themoviedb.org/3/guest_session/${userId}/rated/movies?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export function rateTvShow(userId: string, rating: number) {
  axios
    .post(
      `https://api.themoviedb.org/3/tv/2098/rating?guest_session_id=${userId}&api_key=${
        import.meta.env.VITE_API_KEY
      }`,
      {
        value: rating,
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export function getRatedTvShows(userId: string) {
  axios
    .get(
      `https://api.themoviedb.org/3/guest_session/${userId}/rated/tv?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
