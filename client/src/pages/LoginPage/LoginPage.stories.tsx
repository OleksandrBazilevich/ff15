import { Theme } from "features/ChangeTheme";

import { CenteredDecorator, ThemeDecorator } from "shared/config";

import type { Meta, StoryObj } from "@storybook/react";

import LoginPage from "./LoginPage";

const meta = {
  title: "pages/LoginPage",

  component: LoginPage,

  tags: ["autodocs"]
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [(Story) => ThemeDecorator(Story, Theme.LIGHT)],

  args: {}
};
