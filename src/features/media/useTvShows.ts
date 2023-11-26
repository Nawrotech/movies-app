import { useQuery } from "@tanstack/react-query";
import { getTrendingTvShows } from "../../services/moviesApi";

export const useTvShows = () => {
  const { data: tvshows, isLoading } = useQuery({
    queryKey: ["tvshows"],
    queryFn: getTrendingTvShows,
  });

  return { tvshows };
};
