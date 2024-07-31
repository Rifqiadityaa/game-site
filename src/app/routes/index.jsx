import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../views/HomeView";

export const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <HomeView />,
    },
  ]);
