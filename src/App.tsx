import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { getTrendingMovies, getTrendingTvShows } from "./services/moviesApi";
import { AppLayout } from "./components/AppLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ProtectingRoute } from "./components/ProtectingRoute";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AuthContextProvider } from "./context/authContext";
import { MainPage } from "./pages/MainPage";
import {
  DetailsPage,
  getMoviesDetails,
  getTvShowsDetails,
} from "./pages/DetailsPage";
import { RatingsPage } from "./pages/RatingsPage";
import { ErrorBoundary } from "./pages/ProjectErrorBoundary";

const queryClient = new QueryClient();

function App() {
  // const [userSession, setUserSession] = useState<string | null>("");

  let router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectingRoute children={<AppLayout />} />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          loader: getTrendingMovies,
          errorElement: <ErrorBoundary />,
          element: <MainPage />,
        },
        {
          element: <DetailsPage />,
          // test movie 872585
          path: "movies/:movieId",
          loader: ({ params }) => getMoviesDetails(params.movieId),
          errorElement: <ErrorBoundary />,
        },
        {
          path: "tvshows",
          loader: getTrendingTvShows,
          element: <MainPage />,
          errorElement: <ErrorBoundary />,
        },
        {
          // test tv  202411
          element: <DetailsPage />,
          path: "tvshows/:tvShowId",
          loader: ({ params }) => getTvShowsDetails(params.tvShowId),
          errorElement: <ErrorBoundary />,
        },

        {
          path: "rated/movies",
          // loader: getRatedMovies,
          element: <RatingsPage />,
          // children: [
          //   {
          //     path: "/tvshows",
          //     element: <RatingsPage />,
          //     // loader:
          //   },
          // ],
        },
        {
          path: "rated/tvshows",
        },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
