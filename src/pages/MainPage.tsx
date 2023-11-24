import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export const MainPage = () => {
  const data = useLoaderData();

  useEffect(() => {
    console.log(data);
  }, []);

  return <div>MainPage</div>;
};
