export type TMediaBasic = {
  poster_path: string;
  overview: string;
  vote_average: number;
  id: number;
};

export type TMediaBasicMovie = TMediaBasic & {
  original_title: string;
  release_date: string;
};

export type TMediaBasicTvShow = TMediaBasic & {
  name: string;
  first_air_date: string;
};

export type TMovieDetails = TMediaBasicMovie & {
  budget: number;
  genres: { id: number; name: string }[];
  original_language: string;
  popularity: number;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  revenue: number;
  runtime: number;
};

export type TTvShowDetails = TMediaBasicTvShow & {
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  genres: { id: number; name: string }[];
  networks: { id: number; name: string; logo_path: string }[];
  number_of_episodes: number;
  number_of_seasons: number;
  popularity: number;
  production_companies: { id: number; logo_path: string; name: string }[];
  season: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
  }[];
};
