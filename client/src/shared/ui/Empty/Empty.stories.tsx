import { Theme } from "features/ChangeTheme";

import { ChampionsIcon } from "shared/assets";
import CenteredDecorator from "shared/config/storybook/decorators/CenteredDecorator";
import ThemeDecorator from "shared/config/storybook/decorators/ThemeDecorator";

import type { Meta, StoryObj } from "@storybook/react";

import { Empty } from "./Empty";

const meta = {
  title: "shared/Empty",
  component: Empty,
  tags: ["autodocs"]
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],
  args: {
    description: "Empty"
  }
};

export const CustomIcon: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],
  args: {
    Icon: ChampionsIcon,
    description: "Empty"
  }
};

export const DefaultDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],
  args: {
    description: "Empty"
  }
};

export const CustomIconDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],
  args: {
    Icon: ChampionsIcon,
    description: "Empty"
  }
};
