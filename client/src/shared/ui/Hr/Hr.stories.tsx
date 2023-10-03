import { Theme } from "features/ChangeTheme";

import { CenteredDecorator, ThemeDecorator } from "shared/config";

import type { Meta, StoryObj } from "@storybook/react";

import { Hr } from "./Hr";

const meta = {
  title: "shared/Hr",
  component: Hr,

  tags: ["autodocs"]
} satisfies Meta<typeof Hr>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.LIGHT)]
};

export const DefaultDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)]
};
