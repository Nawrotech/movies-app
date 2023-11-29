import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rateTvShow as rateTvShowApi } from "../../services/moviesApi";

export const useRateTvShow = () => {
  const queryClient = useQueryClient();

  const { mutate: rateTvShow } = useMutation({
    mutationFn: rateTvShowApi,

    onSuccess: () => {
      console.log("hooray, you rated a tvShow");
      queryClient.invalidateQueries({ queryKey: ["ratedTvShows"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return {
    rateTvShow,
  };
};
