import { Theme } from "features/ChangeTheme";

import { CenteredDecorator, ThemeDecorator } from "shared/config";

import type { Meta, StoryObj } from "@storybook/react";

import { IOption, Select } from "./Select";

const meta = {
  title: "shared/Select",
  component: Select,
  tags: ["autodocs"]
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: IOption[] = [
  { value: "1", label: "test 1" },
  { value: "2", label: "test 2" }
];

export const Default: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],
  args: {
    selectedOption: items[0],
    options: items
  }
};
export const DefaultDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],
  args: {
    selectedOption: items[0],
    options: items
  }
};
