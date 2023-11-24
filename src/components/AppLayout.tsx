import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export const AppLayout = () => {
  return (
    <div>
      <h1>hello it is me layout</h1>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
