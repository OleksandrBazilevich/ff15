import { Theme } from "features/ChangeTheme";

import { ChampionsIcon, HomeIcon } from "shared/assets";
import { CenteredDecorator, ThemeDecorator } from "shared/config";

import type { Meta, StoryObj } from "@storybook/react";

import { IMenuItem, Menu } from "./Menu";

const meta = {
  title: "shared/Menu",
  component: Menu,
  tags: ["autodocs"]
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: IMenuItem[] = [
  { id: "1", label: "test", Icon: HomeIcon },
  { id: "2", label: "test", Icon: ChampionsIcon }
];

const itemsWithChildren: IMenuItem[] = [
  {
    id: "1",
    label: "test",
    Icon: HomeIcon,
    children: [
      { id: "3", label: "test 1.1", Icon: HomeIcon },
      { id: "4", label: "test 1.2", Icon: ChampionsIcon }
    ]
  },
  { id: "2", label: "test", Icon: ChampionsIcon }
];

export const Default: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],
  args: {
    items: items
  }
};

export const WithChildren: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],
  args: {
    items: itemsWithChildren
  }
};

export const Collapsed: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],
  args: {
    isCollapsed: true,
    items: items
  }
};

export const WithChildrenCollapsed: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],
  args: {
    isCollapsed: true,
    items: itemsWithChildren
  }
};

export const DefaultDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],
  args: {
    items: items
  }
};

export const WithChildrenDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],
  args: {
    items: itemsWithChildren
  }
};

export const CollapsedDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],
  args: {
    isCollapsed: true,
    items: items
  }
};

export const WithChildrenCollapsedDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],
  args: {
    isCollapsed: true,
    items: itemsWithChildren
  }
};
