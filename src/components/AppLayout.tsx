import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export const AppLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};
