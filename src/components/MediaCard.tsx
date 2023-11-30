import { useLocation, useNavigate } from "react-router-dom";
import { RatingComponent } from "./RatingComponent";
import { TMediaBasicMovie, TMediaBasicTvShow } from "../types/mediaTypes";

type MediaCardProps = {
  media: Partial<TMediaBasicMovie> & Partial<TMediaBasicTvShow>;
};

export const MediaCard = ({ media }: MediaCardProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isMovie = media.hasOwnProperty("original_title");
  const allowRatings = pathname === "/";

  return (
    <div
      onClick={() =>
        navigate(`${isMovie ? `/movie/${media.id}` : `/tvshow/${media.id}`}`)
      }
      className="mediaCard"
    >
      <img
        className="mediadCard__image"
        src={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
        alt={isMovie ? media.original_title : media.name}
      />
      <h2>{isMovie ? media.original_title : media.name}</h2>
      <p>
        <span>
          {isMovie ? media.release_date : media.first_air_date || "unknown"}
        </span>
        &nbsp;|&nbsp;<span>{media.vote_average}</span>
      </p>
      <p>{media.overview}</p>
      {allowRatings ? (
        <RatingComponent isMovie={media.original_title} mediaId={media.id} />
      ) : (
        ""
      )}
    </div>
  );
};
