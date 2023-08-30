import { Theme } from "features/ChangeTheme";

import { CenteredDecorator, ThemeDecorator } from "shared/config";

import type { Meta, StoryObj } from "@storybook/react";

import ChampionsPage from "./ChampionsPage";

const meta = {
  title: "pages/ChampionsPage",

  component: ChampionsPage,

  tags: ["autodocs"]
} satisfies Meta<typeof ChampionsPage>;

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
