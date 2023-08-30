import { Theme } from "features/ChangeTheme";

import { CenteredDecorator, ThemeDecorator } from "shared/config";

import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "./Spinner";

const meta = {
  title: "shared/Spinner",
  component: Spinner,

  tags: ["autodocs"]
} satisfies Meta<typeof Spinner>;

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
