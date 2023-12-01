type TMediaSwitcher = {
  setShowMovies: React.Dispatch<React.SetStateAction<boolean>>;
  showMovies: boolean;
};

export const MediaSwitcher = ({
  setShowMovies,
  showMovies,
}: TMediaSwitcher) => {
  return (
    <div className="switcher">
      <button
        className={`${showMovies ? "active" : ""}`}
        onClick={() => setShowMovies(true)}
      >
        Movies
      </button>
      <button
        className={`${!showMovies ? "active" : ""}`}
        onClick={() => setShowMovies(false)}
      >
        Tv Shows
      </button>
    </div>
  );
};
