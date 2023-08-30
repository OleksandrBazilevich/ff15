import { ReactElement } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";

import i18n from "shared/config/i18n/i18nForTests";

import { render } from "@testing-library/react";

export const RenderWithProviders = (component: ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <MemoryRouter initialEntries={["/"]}>{component}</MemoryRouter>
    </I18nextProvider>
  );
};
