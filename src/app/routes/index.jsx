import { createBrowserRouter } from "react-router-dom";
import DetailsView from "../../views/DetailsView";
import GamesByGenreView from "../../views/GamesByGenreView";
import HomeView from "../../views/HomeView";

export const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/game/:id",
      element: <DetailsView />,
    },
    {
      path: "/games/genre/:name",
      element: <GamesByGenreView />,
    },
  ]);
