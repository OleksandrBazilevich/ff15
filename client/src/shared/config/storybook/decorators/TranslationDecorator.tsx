import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "shared/config/i18n/i18nForTests";

import { Story } from "@storybook/react";

const RouterDecorator = (Story: Story) => {
  return (
    <Suspense fallback={""}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

export default RouterDecorator;
