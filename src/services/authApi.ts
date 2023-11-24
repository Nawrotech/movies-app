import axios from "axios";

export function logInUser() {
  axios
    .get(
      `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    .then(function (response) {
      // setUserSession(response.data.guest_session_id);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function logOutUser(sessionId: string) {
  axios
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

  // setUserSession(null);
}
