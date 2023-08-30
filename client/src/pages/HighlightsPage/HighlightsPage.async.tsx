import { lazy } from "react";

export const HighlightsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        //@ts-ignore
        resolve(import("./HighlightsPage"));
      }, 2000);
    })
);
