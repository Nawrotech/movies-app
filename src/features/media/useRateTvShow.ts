import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rateTvShow as rateMovieApi } from "../../services/moviesApi";

export const useRateTvShow = () => {
  const queryClient = useQueryClient();

  const { mutate: rateMovie } = useMutation({
    mutationFn: rateMovieApi,
    // mutationKey: ["ratedMovies"],
    onSuccess: () => {
      console.log("hooray, you rated a movie");
      queryClient.invalidateQueries({ queryKey: ["ratedMovies"] });
    },
  });

  return {
    rateMovie,
  };
};
