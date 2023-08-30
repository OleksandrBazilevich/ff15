import "../../src/app/styles/index.scss";

import { Theme } from "../../src/features/ChangeTheme/index";

import { RouterDecorator, TranslationDecorator } from "../../src/shared/config";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },

  decorators: [RouterDecorator, TranslationDecorator]
};

export default preview;
