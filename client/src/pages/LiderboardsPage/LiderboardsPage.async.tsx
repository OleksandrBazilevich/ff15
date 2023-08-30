import { lazy } from "react";

export const LiderboardsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        //@ts-ignore
        resolve(import("./LiderboardsPage"));
      }, 2000);
    })
);
