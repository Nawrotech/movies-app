import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../../services/moviesApi";

export const useMovies = () => {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getTrendingMovies,
  });

  return { movies, isLoading };
};
