import { useAuth } from "../context/authContext";
import { useRateMovie } from "../features/media/useRateMovie";
import { useState } from "react";
import { useRateTvShow } from "../features/media/useRateTvShow";

export const RatingComponent = ({ mediaId, isMovie }) => {
  const [score, setScore] = useState(1);

  const { user } = useAuth();

  const { rateMovie } = useRateMovie();
  const { rateTvShow } = useRateTvShow();

  function handleRateMedia() {
    if (isMovie) {
      return rateMovie({
        movieId: mediaId,
        userId: user?.guest_session_id,
        rating: score,
      });
    } else if (!isMovie) {
      return rateTvShow({
        movieId: mediaId,
        userId: user?.guest_session_id,
        rating: score,
      });
    }
  }

  // with regex restrict input value
  // to do modal with portal, modal component
  return (
    <div onClick={(e) => e.stopPropagation()} className="rating">
      <input
        onChange={(e) => setScore(Number(e.target.value))}
        min={1}
        max={10}
        type="number"
      />
      <button
        onClick={
          handleRateMedia
          // rateMovie({
          //   movieId: mediaId,
          //   userId: user?.guest_session_id,
          //   rating: score,
          // })
        }
      >
        Submit rating
      </button>
    </div>
  );
};
