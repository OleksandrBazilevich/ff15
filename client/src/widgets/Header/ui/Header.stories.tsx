import { Theme } from "features/ChangeTheme";

import { ThemeDecorator } from "shared/config";

import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";

const meta = {
  title: "widgets/Header",

  component: Header,

  tags: ["autodocs"]
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [(Story) => ThemeDecorator(Story, Theme.LIGHT)],
  args: {}
};

export const DefaultDark: Story = {
  decorators: [(Story) => ThemeDecorator(Story, Theme.DARK)],
  args: {}
};
