import { useQuery } from "@tanstack/react-query";
import { getRatedMovies } from "../../services/moviesApi";

export const useRatedMovies = (userId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["ratedMovies", userId],
    queryFn: () => getRatedMovies(userId),
  });

  return { data, isLoading };
};
