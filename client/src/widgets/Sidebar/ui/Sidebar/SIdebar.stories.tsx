import { Theme } from "features/ChangeTheme";

import { ThemeDecorator } from "shared/config";

import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./Sidebar";

const meta = {
  title: "widgets/Sidebar",

  component: Sidebar,

  tags: ["autodocs"]
} satisfies Meta<typeof Sidebar>;

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
