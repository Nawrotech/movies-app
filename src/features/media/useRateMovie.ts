import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rateMovie as rateMovieApi } from "../../services/moviesApi";

export const useRateMovie = () => {
  const queryClient = useQueryClient();

  const { mutate: rateMovie } = useMutation({
    mutationFn: rateMovieApi,
    onSuccess: () => {
      console.log("hooray, you rated a movie");
      queryClient.invalidateQueries({ queryKey: ["ratedMovies"] });
    },
  });

  return {
    rateMovie,
  };
};
