import { lazy } from "react";

export const ChampionsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        //@ts-ignore
        resolve(import("./ChampionsPage"));
      }, 2000);
    })
);
