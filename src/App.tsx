import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { getTrendingMovies, getTrendingTvShows } from "./services/moviesApi";
import { AppLayout } from "./components/AppLayout";

import { ProtectingRoute } from "./components/ProtectingRoute";

import { AuthContextProvider, useAuth } from "./context/authContext";
import { MainPage } from "./pages/MainPage";
import { DetailsPage } from "./pages/DetailsPage";

function App() {
  // const [userSession, setUserSession] = useState<string | null>("");

  let router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectingRoute children={<AppLayout />} />,
      children: [
        {
          index: true,
          loader: getTrendingMovies,
          element: <MainPage />,
        },
        {
          // loader: function that requires arguments
          element: <DetailsPage />,
          path: "movies/:id",
        },
        {
          path: "tvshows",
          loader: getTrendingTvShows,
          element: <MainPage />,
          children: [
            {
              element: <DetailsPage />,
              // loader:
              path: ":id",
            },
          ],
        },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
  ]);
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
