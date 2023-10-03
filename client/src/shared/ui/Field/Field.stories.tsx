import { Theme } from "features/ChangeTheme";

import { SearchIcon } from "shared/assets";
import { CenteredDecorator, ThemeDecorator } from "shared/config";

import type { Meta, StoryObj } from "@storybook/react";

import { Field } from "./Field";

const meta = {
  title: "shared/Field",
  component: Field,

  tags: ["autodocs"]
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],
  args: {
    value: "",
    placeholder: "field"
  }
};

export const DefaultDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],
  args: {
    value: "",
    placeholder: "field"
  }
};

export const WithIcon: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],
  args: {
    value: "",
    placeholder: "field",
    Icon: SearchIcon
  }
};

export const WithIconDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],
  args: {
    value: "",
    placeholder: "field",
    Icon: SearchIcon
  }
};

export const Error: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],
  args: {
    value: "",
    placeholder: "field",
    color: "error"
  }
};

export const ErrorDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],
  args: {
    value: "",
    placeholder: "field",
    color: "error"
  }
};
