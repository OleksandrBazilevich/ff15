import { Suspense } from "react";
import { RouteProps } from "react-router-dom";

import { AboutPageAsync } from "pages/AboutPage";
import { AdminPageAsync } from "pages/AdminPage";
import { ChampionsPageAsync } from "pages/ChampionsPage";
import { HighlightsPageAsync } from "pages/HighlightsPage";
import { LiderboardsPageAsync } from "pages/LiderboardsPage";
import { MainPageAsync } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";
import { ProfilePageAsync } from "pages/ProfilePage";

import { Spinner } from "shared/ui/Spinner/Spinner";

import { Layout } from "../layout/Layout";

enum Routes {
  MAIN = "main",
  PROFILE = "profile",
  HIGHLIGHTS = "highlights",
  CHALLENGES = "challenges",
  SUMMONER = "summoner",
  CHAMPION = "champions",
  CHAMPIONS = "champion",
  LIDERBOARDS = "liderboards",
  LIVE_STREAMERS = "live_streamers",
  ADMIN = "admin",
  LOGIN = "login",
  REGISTER = "register",
  NOT_FOUND = "not_found"
}

type PathType = Record<Routes, string>;

type RouterConfigType = Record<Routes, RouteProps>;

const Paths: PathType = {
  main: "/",
  profile: "/profile",
  highlights: "/highlights",
  challenges: "/challenges",
  summoner: "/summoner/:id",
  champion: "/champion/:id",
  champions: "/champions",
  liderboards: "/liderboards",
  live_streamers: "/live_streamers",
  register: "/register",
  login: "/login",
  admin: "/admin",
  //last
  not_found: "*"
};

export const routerConfig: RouterConfigType = {
  [Routes.MAIN]: {
    path: Paths.main,
    element: (
      <Layout>
        <MainPageAsync />
      </Layout>
    )
  },
  [Routes.PROFILE]: {
    path: Paths.profile,
    element: (
      <Layout>
        <ProfilePageAsync />
      </Layout>
    )
  },
  [Routes.CHAMPION]: {
    path: Paths.champion,
    element: (
      <Layout>
        <AboutPageAsync />
      </Layout>
    )
  },
  [Routes.CHAMPIONS]: {
    path: Paths.champions,
    element: (
      <Layout>
        <ChampionsPageAsync />
      </Layout>
    )
  },
  [Routes.SUMMONER]: {
    path: Paths.summoner,
    element: (
      <Layout>
        <AboutPageAsync />
      </Layout>
    )
  },
  [Routes.CHALLENGES]: {
    path: Paths.challenges,
    element: (
      <Layout>
        <AboutPageAsync />
      </Layout>
    )
  },
  [Routes.LIDERBOARDS]: {
    path: Paths.liderboards,
    element: (
      <Layout>
        <LiderboardsPageAsync />
      </Layout>
    )
  },
  [Routes.LIVE_STREAMERS]: {
    path: Paths.live_streamers,
    element: (
      <Layout>
        <AboutPageAsync />
      </Layout>
    )
  },
  [Routes.HIGHLIGHTS]: {
    path: Paths.highlights,
    element: (
      <Layout>
        <HighlightsPageAsync />
      </Layout>
    )
  },
  [Routes.REGISTER]: {
    path: Paths.register,
    element: (
      <Suspense fallback={<Spinner />}>
        <AboutPageAsync />
      </Suspense>
    )
  },

  [Routes.LOGIN]: {
    path: Paths.login,
    element: (
      <Suspense fallback={<Spinner />}>
        <AboutPageAsync />
      </Suspense>
    )
  },

  [Routes.ADMIN]: {
    path: Paths.admin,
    element: (
      <Layout>
        <AdminPageAsync />
      </Layout>
    )
  },

  [Routes.NOT_FOUND]: {
    path: Paths.not_found,
    element: <NotFoundPage />
  }
};
