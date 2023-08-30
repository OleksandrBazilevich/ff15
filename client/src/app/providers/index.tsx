import { ThemeProvider } from "features/ChangeTheme";

import { compose } from "shared/lib";

import App from "../App";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";
import RouterProvider from "./router/RouterProvider";

const ProvidersWrapper = () => {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
};

const withProviders = compose(RouterProvider, ThemeProvider);

export const MainProvider = withProviders(ProvidersWrapper);
