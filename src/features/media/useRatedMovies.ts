import { useQuery } from "@tanstack/react-query";
import { getRatedMovies } from "../../services/moviesApi";

export const useRatedMovies = (userId: string | undefined) => {
  const { data: ratedMovies, isLoading } = useQuery({
    queryKey: ["ratedMovies", userId],
    queryFn: () => getRatedMovies(userId),
  });

  return { ratedMovies, isLoading };
};
