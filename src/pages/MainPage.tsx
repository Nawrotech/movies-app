import { useState, useEffect } from "react";
import { MediaSwitcher } from "../components/MediaSwitcher";
import { useMovies } from "../features/media/useMovies";
import { useTvShows } from "../features/media/useTvShows";
import { MediaCard } from "../components/MediaCard";

import { TMediaBasicMovie, TMediaBasicTvShow } from "../types/mediaTypes";

export const MainPage = () => {
  const [media, setMedia] = useState<"movies" | "tvshows">("movies");

  const { movies } = useMovies();
  const { tvshows } = useTvShows();

  useEffect(() => {
    console.log(movies);
    console.log(tvshows);
  }, [movies, tvshows]);

  return (
    <section className="main-page">
      <MediaSwitcher setMedia={setMedia} />
      <div className="mediaContainer">
        {media === "movies"
          ? movies?.results?.map((movie: TMediaBasicMovie) => (
              <MediaCard media={media} {...movie} key={movie?.id} />
            ))
          : tvshows?.results?.map((tvshow: TMediaBasicTvShow) => (
              <MediaCard media={media} {...tvshow} key={tvshow?.id} />
            ))}
      </div>
    </section>
  );
};
