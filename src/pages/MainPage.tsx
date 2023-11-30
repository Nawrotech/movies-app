import { useState, useEffect } from "react";
import { MediaSwitcher } from "../components/MediaSwitcher";
import { useMovies } from "../features/media/useMovies";
import { useTvShows } from "../features/media/useTvShows";
import { MediaCard } from "../components/MediaCard";

import { TMediaBasicMovie, TMediaBasicTvShow } from "../types/mediaTypes";

export const MainPage = () => {
  const [showMovies, setShowMovies] = useState(true);
  const { movies } = useMovies();
  const { tvshows } = useTvShows();

  useEffect(() => {
    console.log(movies);
    console.log(tvshows);
  }, [movies, tvshows]);

  // to do infinite scroll
  return (
    <section className="main-page">
      <MediaSwitcher setShowMovies={setShowMovies} />
      <div className="mediaContainer">
        {showMovies
          ? movies?.results?.map((movie: TMediaBasicMovie) => (
              <MediaCard media={movie} key={movie?.id} />
            ))
          : tvshows?.results?.map((tvshow: Partial<TMediaBasicTvShow>) => (
              <MediaCard media={tvshow} key={tvshow?.id} />
            ))}
      </div>
    </section>
  );
};
