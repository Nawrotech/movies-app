import { useQuery } from "@tanstack/react-query";
import { getRatedTvShows as getRatedTvShowsApi } from "../../services/moviesApi";

export const useRatedTvShows = (userId: string | undefined) => {
  const { data: ratedTvShows, isLoading } = useQuery({
    queryKey: ["ratedTvShows", userId],
    queryFn: () => getRatedTvShowsApi(userId),
  });

  return { ratedTvShows, isLoading };
};
