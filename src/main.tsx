import React from "react";
import ReactDOM, { type Container } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";

import LadderLeague from "./pages/LadderLeague";
import ProfilePage from "./pages/ProfilePage";
import Tournaments from "./pages/Tournaments";
import TournamentsPast from "./pages/TournamentsPast";
import Testimonials from "./pages/Testimonials";
import Media from "./pages/Media";
import Waiver from "./pages/Waiver";
import Dupr16 from "./pages/Dupr16";
import Dupr16LiveStandings from "./pages/Dupr16LiveStandings";
import Error404 from "./pages/Error404";
import LadderLeagueRules from "./pages/LadderLeagueRules";
import Admin from "./pages/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ladder-league",
    element: <LadderLeague />,
  },
  {
    path: "/ladder-league/:playerId",
    element: <ProfilePage />
  },
  {
    path: "/ladder-league-rules",
    element: <LadderLeagueRules />
  },
  {
    path: "/tournaments",
    element: <Tournaments />
  },
  {
    path: "/past-tournaments",
    element: <TournamentsPast />
  },
  {
    path: "/testimonials",
    element: <Testimonials />
  },
  {
    path: "/media",
    element: <Media />
  },
  {
    path: "/waiver",
    element: <Waiver />
  },
  {
    path: "/dupr-16",
    element: <Dupr16 />
  },
  {
    path: "/dupr-16/live-standings",
    element: <Dupr16LiveStandings />
  },
  {
    path: "/admin",
    element: <Admin />
  },
  {
    path: "/*",
    element: <Error404 />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as Container).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
