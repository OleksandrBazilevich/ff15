import { Theme } from "features/ChangeTheme";

import { Story } from "@storybook/react";

const ThemeDecorator = (Story: Story, theme: Theme) => {
  return (
    <body className={theme}>
      <Story />
    </body>
  );
};

export default ThemeDecorator;
