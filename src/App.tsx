import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
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
  let router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectingRoute children={<AppLayout />} />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          errorElement: <ErrorBoundary />,
          element: <MainPage />,
        },
        {
          element: <DetailsPage />,
          path: "movie/:movieId",
          loader: ({ params }) => getMoviesDetails(params.movieId),
          errorElement: <ErrorBoundary />,
        },
        {
          element: <DetailsPage />,
          path: "tvshow/:tvShowId",
          loader: ({ params }) => getTvShowsDetails(params.tvShowId),
          errorElement: <ErrorBoundary />,
        },
        {
          path: "rated",
          element: <RatingsPage />,
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
