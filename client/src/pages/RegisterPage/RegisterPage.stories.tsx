import { Theme } from "features/ChangeTheme";

import { ThemeDecorator } from "shared/config";

import type { Meta, StoryObj } from "@storybook/react";

import RegisterPage from "./RegisterPage";

const meta = {
  title: "pages/RegisterPage",

  component: RegisterPage,

  tags: ["autodocs"]
} satisfies Meta<typeof RegisterPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [(Story) => ThemeDecorator(Story, Theme.LIGHT)],

  args: {}
};
