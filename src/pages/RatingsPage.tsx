import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/authContext";
import { useRatedMovies } from "../features/media/useRatedMovies";
import { MediaCard } from "../components/MediaCard";

export const RatingsPage = () => {
  const { user } = useAuth();

  const { data } = useRatedMovies(user?.guest_session_id);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <section className="mediaContainer">
      {data?.results?.map((el) => (
        <MediaCard key={el.id} {...el} />
      ))}
    </section>
  );
};

// export function getRatedMovies(userId: string) {
//   return axios
//     .get(
//       `https://api.themoviedb.org/3/guest_session/${user}/rated/movies?api_key=${
//         import.meta.env.VITE_API_KEY
//       }`
//     )
//     .then((res) => res.data)
//     .catch((err) => {
//       throw new Error(err);
//     });
// }
