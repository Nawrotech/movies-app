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
    <ul className="detailsList">
      <li>
        <span className="label">Created By:&nbsp;</span>
        <span>{creators}</span>
      </li>
      <li>
        <span className="label">Epiose Run Time:&nbsp;</span>
        <span>{episode_run_time}</span>
      </li>
      <li>
        <span className="label">First Air Date:&nbsp;</span>f
        <span>{first_air_date}</span>
      </li>
      <li>
        <span className="label">Networks:&nbsp;</span>
        {networks.map((network) => (
          <p key={network.name}>{network.name}</p>
        ))}
      </li>
      <li>
        <span className="label">Number of episodes:&nbsp;</span>
        <span>{number_of_episodes}</span>
      </li>
      <li>
        <span className="label">Number of seasons:&nbsp;</span>
        <span>{number_of_seasons}</span>
      </li>
      <li>
        <span className="label">Popularity:&nbsp;</span>
        <span>{popularity}</span>
      </li>
      <li>
        <span className="label">Popularity:&nbsp;</span>
        <span>{popularity}</span>
      </li>
      <li>
        <span className="label">Production Companies:&nbsp;</span>
        <span>
          {production_companies.map((company) => company.name).join(", ")}
        </span>
      </li>
      <li>
        <span className="label">Seasons:&nbsp;</span>
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
        <span className="label">Vote Average: </span>
        <span>{vote_average}</span>
      </li>
    </ul>
  );
};
