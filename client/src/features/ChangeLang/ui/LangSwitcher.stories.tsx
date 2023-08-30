import { Theme } from "features/ChangeTheme";

import { CenteredDecorator, ThemeDecorator } from "shared/config";

import type { Meta, StoryObj } from "@storybook/react";

import { LangSwitcher } from "./LangSwitcher";

const meta = {
  title: "features/LangSwitcher",

  component: LangSwitcher,

  tags: ["autodocs"]
} satisfies Meta<typeof LangSwitcher>;

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
