import { Theme } from "features/ChangeTheme";

import { GoogleIcon } from "shared/assets";
import { CenteredDecorator, ThemeDecorator } from "shared/config";

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],

  args: {
    theme: "default",
    children: "Button"
  }
};

export const DefaultDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],

  args: {
    theme: "default",
    children: "Button"
  }
};

export const Disabled: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],

  args: {
    theme: "default",
    disabled: true,
    children: "Button"
  }
};

export const DisabledDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],

  args: {
    theme: "default",
    disabled: true,
    children: "Button"
  }
};

export const Icon: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],

  args: {
    theme: "icon",
    children: <GoogleIcon width={30} height={30} />
  }
};

export const IconDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],

  args: {
    theme: "icon",
    children: <GoogleIcon width={30} height={30} />
  }
};

export const Primary: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],

  args: {
    theme: "primary",
    children: "Button"
  }
};

export const PrimaryDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],

  args: {
    theme: "primary",
    children: "Button"
  }
};

export const Clean: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],

  args: {
    theme: "clean",
    children: "Button"
  }
};

export const CleanDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],

  args: {
    theme: "clean",
    children: "Button"
  }
};
