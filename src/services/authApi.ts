import axios from "axios";

export function logInUser() {
  return axios
    .get(
      `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error);
    });
}

export function logOutUser(sessionId: string) {
  return axios
    .delete(
      `https://api.themoviedb.org/3/movie/670292/rating?guest_session_id=${sessionId}&api_key=${
        import.meta.env.VITE_API_KEY
      }`,
      {
        data: JSON.stringify({ session_id: sessionId }),
      }
    )
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}
