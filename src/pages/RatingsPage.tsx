import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useRatedMovies } from "../features/media/useRatedMovies";
import { MediaCard } from "../components/MediaCard";
import { useRatedTvShows } from "../features/media/useRatedTvShows";
import { MediaSwitcher } from "../components/MediaSwitcher";
import { TMediaBasicMovie, TMediaBasicTvShow } from "../types/mediaTypes";

export const RatingsPage = () => {
  const [showMovies, setShowMovies] = useState(true);

  const { user } = useAuth();

  const { ratedMovies } = useRatedMovies(user?.guest_session_id);
  const { ratedTvShows } = useRatedTvShows(user?.guest_session_id);

  // ratings should be displayed on hover

  return (
    <section className="mediaContainer">
      <MediaSwitcher setShowMovies={setShowMovies} />
      {showMovies
        ? ratedMovies?.results?.map((ratedMovie: TMediaBasicMovie) => (
            <MediaCard key={ratedMovie.id} media={ratedMovie} />
          ))
        : ratedTvShows?.results?.map((ratedTvShow: TMediaBasicTvShow) => (
            <MediaCard key={ratedTvShow.id} media={ratedTvShow} />
          ))}
    </section>
  );
};
