import {
  useRouteError,
  useNavigate,
  isRouteErrorResponse,
} from "react-router-dom";

type TError = {
  data: string;
  message: string;
};

export function ErrorBoundary() {
  let error = useRouteError() as TError;
  const navigate = useNavigate();

  return (
    <div>
      <h1>Uh oh, something went terribly wrong 😩</h1>
      {isRouteErrorResponse(error) ? (
        <p>{error.data}</p>
      ) : (
        <p>{error.message}, we couldn't find requested query</p>
      )}

      <button onClick={() => navigate(-1)}>&larr; Go back </button>
    </div>
  );
}
