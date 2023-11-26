import { TMovieDetails } from "../types/mediaTypes";

type MovieDetailsListProps = {
  data: TMovieDetails;
};

export const MovieDetailsList = ({ data }: MovieDetailsListProps) => {
  const {
    budget,
    genres,
    original_language,
    overview,
    popularity,
    production_companies,
    release_date,
    revenue,
    runtime,
    vote_average,
  } = data;

  return (
    <ul className="movieDetails">
      <li>
        <span className="label">Budget:</span> <span>{budget}</span>
      </li>
      <li>
        <span className="label">Genres:</span>{" "}
        <span>
          {genres
            .map((genre: { id: number; name: string }) => genre.name)
            .join(", ")}
        </span>
      </li>
      <li>
        <span className="label">Popularity:</span> <span>{popularity}</span>
      </li>
      <li>
        <span className="label">Overview:</span> <p>{overview}</p>
      </li>

      <li>
        <span className="label">Production Companies:</span>{" "}
        <div className="companies_container">
          {production_companies.map((company) => (
            <img
              src={`https://image.tmdb.org/t/p/original/${company?.logo_path}`}
              alt={company.name}
            />
          ))}
        </div>
      </li>
      <li>
        <span className="label">Release Date:</span> <span>{release_date}</span>
      </li>
      <li>
        <span className="label">Revenue:</span> <span>{revenue}</span>
      </li>
      <li>
        <span className="label">Runtime:</span> <span>{runtime}</span>
      </li>
      <li>
        <span className="label">Vote average:</span> <span>{vote_average}</span>
      </li>
      <li>
        <span className="label">Vote average:</span>{" "}
        <span>{original_language}</span>
      </li>
    </ul>
  );
};
