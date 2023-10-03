import { Theme } from "features/ChangeTheme";

import { CenteredDecorator, ThemeDecorator } from "shared/config";

import type { Meta, StoryObj } from "@storybook/react";

import { AuthField } from "./AuthField";

const meta = {
  title: "features/AuthField",

  component: AuthField,

  tags: ["autodocs"]
} satisfies Meta<typeof AuthField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],

  args: {
    name: "field",
    value: "",
    placeholder: "field",
    errors: {
      field: ""
    }
  }
};

export const DefaultDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],

  args: {
    name: "field",
    value: "",
    placeholder: "field",
    errors: {
      field: ""
    }
  }
};

export const WithError: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],

  args: {
    value: "",
    placeholder: "field",
    name: "field",
    errors: {
      field: "error"
    }
  }
};

export const WithErrorDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],

  args: {
    value: "",
    placeholder: "field",
    name: "field",
    errors: {
      field: "error"
    }
  }
};

export const Password: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],

  args: {
    name: "field",
    value: "1111",
    placeholder: "field",
    type: "password",
    errors: {
      field: ""
    }
  }
};

export const PasswordDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],

  args: {
    name: "field",
    value: "1111",
    placeholder: "field",
    type: "password",
    errors: {
      field: ""
    }
  }
};
