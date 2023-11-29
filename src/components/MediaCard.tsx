import { useLocation, useNavigate } from "react-router-dom";
import { RatingComponent } from "./RatingComponent";

type MediaCardProps = {
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
  first_air_date,
}: MediaCardProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div
      onClick={() =>
        navigate(
          `${original_title !== undefined ? `/movie/${id}` : `/tvshow/${id}`}`
        )
      }
      className="mediaCard"
    >
      <img
        className="mediadCard__image"
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={original_title}
      />
      <h2>{original_title || name}</h2>
      <p>
        <span>{release_date || first_air_date || "unknown"}</span>
        &nbsp;|&nbsp;<span>{vote_average}</span>
      </p>
      <p>{overview}</p>
      {pathname === "/" ? (
        <RatingComponent isMovie={original_title} mediaId={id} />
      ) : (
        ""
      )}
    </div>
  );
};
