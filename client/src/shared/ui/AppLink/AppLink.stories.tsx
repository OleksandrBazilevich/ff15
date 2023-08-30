import { Theme } from "features/ChangeTheme";

import { CenteredDecorator, ThemeDecorator } from "shared/config";

import type { Meta, StoryObj } from "@storybook/react";

import { AppLink } from "./AppLink";

const meta = {
  title: "shared/AppLink",

  component: AppLink,

  tags: ["autodocs"]
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],
  args: {
    children: "Link",
    to: "/"
  }
};

export const DefaultDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],
  args: {
    children: "Link",
    to: "/"
  }
};
