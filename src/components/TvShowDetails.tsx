import { TTvShowDetails } from "../types/mediaTypes";

type PropsTvShowDetails = {
  data: TTvShowDetails;
};

export const TvShowDetails = ({ data }: PropsTvShowDetails) => {
  const {
    created_by,
    episode_run_time,
    first_air_date,
    networks,
    number_of_episodes,
    number_of_seasons,
    popularity,
    production_companies,
    seasons,
    vote_average,
  } = data;

  const creators = created_by.map((creator) => creator?.name).join(", ");

  return (
    <ul>
      <li>
        <span>Created By:&nbsp;</span>
        <span>{creators}</span>
      </li>
      <li>
        <span>Epiose Run Time:&nbsp;</span>
        <span>{episode_run_time}</span>
      </li>
      <li>
        <span>First Air Date:&nbsp;</span>f<span>{first_air_date}</span>
      </li>
      <li>
        <span>Networks:&nbsp;</span>
        {networks.map((network) => (
          <p key={network.name}>{network.name}</p>
        ))}
      </li>
      <li>
        <span>Number of episodes:&nbsp;</span>
        <span>{number_of_episodes}</span>
      </li>
      <li>
        <span>Number of seasons:&nbsp;</span>
        <span>{number_of_seasons}</span>
      </li>
      <li>
        <span>Popularity:&nbsp;</span>
        <span>{popularity}</span>
      </li>
      <li>
        <span>Popularity:&nbsp;</span>
        <span>{popularity}</span>
      </li>
      <li>
        <span>Production Companies:&nbsp;</span>
        <span>
          {production_companies.map((company) => company.name).join(", ")}
        </span>
      </li>
      <li>
        <span>Seasons:&nbsp;</span>
        <div className="">
          {seasons.map((season) => {
            return (
              <details key={season.id}>
                <summary>{season?.season_number}</summary>
                <p>{season?.air_date}</p>
                <p>{season?.episode_count} episodes</p>
              </details>
            );
          })}
        </div>
      </li>
      <li>
        <span>Vote Average: </span>
        <span>{vote_average}</span>
      </li>
    </ul>
  );
};
