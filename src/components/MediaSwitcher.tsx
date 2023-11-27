type TMediaSwitcher = {
  setShowMovies: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MediaSwitcher = ({ setShowMovies }: TMediaSwitcher) => {
  return (
    <div className="switcher">
      <button onClick={() => setShowMovies(true)}>Movies</button>
      <button onClick={() => setShowMovies(false)}>Tv Shows</button>
    </div>
  );
};
