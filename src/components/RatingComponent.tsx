import { useAuth } from "../context/authContext";
import { useRateMovie } from "../features/media/useRateMovie";
import { useState } from "react";

export const RatingComponent = ({ mediaId, showMovies }) => {
  const [score, setScore] = useState(1);

  const { user } = useAuth();

  const { rateMovie } = useRateMovie();

  // function handleRateMedia() {
  //   if (showMovies) {
  //     return rateMovie({
  //       movieId: mediaId,
  //       userId: user?.guest_session_id,
  //       rating: score,
  //     });
  //   } else if (!showMovies) {
  //     return;
  //   }
  // }
  // with regex restrict input value
  return (
    <div onClick={(e) => e.stopPropagation()} className="rating">
      <input
        onChange={(e) => setScore(Number(e.target.value))}
        min={1}
        max={10}
        type="number"
      />
      <button
        onClick={() =>
          rateMovie({
            movieId: mediaId,
            userId: user?.guest_session_id,
            rating: score,
          })
        }
      >
        Submit rating
      </button>
    </div>
  );
};
