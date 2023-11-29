import { useEffect, useState } from "react";

import { useAuth } from "../context/authContext";
import { useRatedMovies } from "../features/media/useRatedMovies";
import { MediaCard } from "../components/MediaCard";
import { useRatedTvShows } from "../features/media/useRatedTvShows";
import { MediaSwitcher } from "../components/MediaSwitcher";
import { TMovieDetails, TTvShowDetails } from "../types/mediaTypes";

export const RatingsPage = () => {
  const [showTv, setShowTv] = useState(false);

  const { user } = useAuth();

  const { ratedMovies } = useRatedMovies(user?.guest_session_id);
  const { ratedTvShows } = useRatedTvShows(user?.guest_session_id);

  useEffect(() => {
    console.log(ratedMovies);
    console.log(ratedTvShows);
  }, [ratedMovies, ratedTvShows]);

  // ratings should be displayed on hover

  return (
    <section className="mediaContainer">
      <MediaSwitcher setShowMovies={setShowTv} />

      {showTv
        ? ratedMovies?.results?.map((el: TMovieDetails) => (
            <MediaCard key={el.id} {...el} />
          ))
        : ratedTvShows?.results?.map((el: TTvShowDetails) => (
            <MediaCard key={el.id} {...el} />
          ))}
    </section>
  );
};
