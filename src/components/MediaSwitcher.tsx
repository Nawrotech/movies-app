export const MediaSwitcher = ({ setMedia }) => {
  return (
    <div className="switcher">
      <button onClick={() => setMedia("movies")}>Movies</button>
      <button onClick={() => setMedia("tvshows")}>Tv Shows</button>
    </div>
  );
};
