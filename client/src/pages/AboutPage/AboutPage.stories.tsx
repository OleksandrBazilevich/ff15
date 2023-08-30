import { Theme } from "features/ChangeTheme";

import { CenteredDecorator, ThemeDecorator } from "shared/config";

import type { Meta, StoryObj } from "@storybook/react";

import AboutPage from "./AboutPage";

const meta = {
  title: "pages/AboutPage",

  component: AboutPage,

  tags: ["autodocs"]
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],

  args: {}
};

export const DefaultDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],

  args: {}
};
