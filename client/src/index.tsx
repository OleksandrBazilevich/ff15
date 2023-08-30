import React from "react";

import { MainProvider } from "app/providers";

import "./shared/config/i18n/i18n";

import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <MainProvider />
  </React.StrictMode>
);
