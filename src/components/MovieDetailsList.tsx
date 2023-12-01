import { TMovieDetails } from "../types/mediaTypes";
import { formatTime } from "../utils/timeFormatter";
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
    <ul className="detailsList">
      <li>
        <span className="label">Budget:</span>{" "}
        <span>{budget || "unknown"}</span>
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
        <div className="companiesContainer">
          {production_companies.map((company) => (
            <img
              className="prodCompanyLogo"
              key={company.id}
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
        <span className="label">Revenue:</span>{" "}
        <span>{revenue || "unknown"}</span>
      </li>
      <li>
        <span className="label">Runtime:</span>{" "}
        <span>{formatTime(runtime)}</span>
      </li>
      <li>
        <span className="label">Vote average:</span> <span>{vote_average}</span>
      </li>
      <li>
        <span className="label">Language:</span>{" "}
        <span>{original_language}</span>
      </li>
    </ul>
  );
};
