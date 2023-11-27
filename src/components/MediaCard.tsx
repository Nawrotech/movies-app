import { useNavigate } from "react-router-dom";
import { RatingComponent } from "./RatingComponent";

type MediaCardProps = {
  showMovies: boolean;
  poster_path: string;
  overview: string;
  vote_average: number;
  id: number;
  original_title?: string;
  release_date?: string;
  name?: string;
  first_air_date?: string;
};

export const MediaCard = ({
  poster_path,
  original_title,
  overview,
  release_date,
  vote_average,
  id,
  name,
  showMovies,
  first_air_date,
}: MediaCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`${showMovies ? `/movie/${id}` : `/tvshow/${id}`}`)
      }
      className="mediaCard"
    >
      <img
        className="mediadCard__image"
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={original_title}
      />
      <h2>{showMovies ? original_title : name}</h2>
      <p>
        <span>{(showMovies ? release_date : first_air_date) || "unknown"}</span>
        &nbsp;|&nbsp;<span>{vote_average}</span>
      </p>
      <p>{overview}</p>
      <RatingComponent />
    </div>
  );
};
