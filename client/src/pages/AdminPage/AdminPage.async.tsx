import { lazy } from "react";

export const AdminPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        //@ts-ignore
        resolve(import("./AdminPage"));
      }, 2000);
    })
);
