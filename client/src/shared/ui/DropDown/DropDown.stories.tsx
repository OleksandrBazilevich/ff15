import { Theme } from "features/ChangeTheme";

import { ChampionsIcon, HomeIcon } from "shared/assets";
import { CenteredDecorator, ThemeDecorator } from "shared/config";

import type { Meta, StoryObj } from "@storybook/react";

import { DropDown, IDropDownMenuItem } from "./DropDown";

const meta = {
  title: "shared/DropDown",
  component: DropDown,
  tags: ["autodocs"]
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

const itemsWithIcons: IDropDownMenuItem[] = [
  { id: "1", label: "test", Icon: HomeIcon },
  { id: "2", label: "test", Icon: ChampionsIcon }
];

const itemsWithoutIcons: IDropDownMenuItem[] = [
  { id: "1", label: "test" },
  { id: "2", label: "test" }
];

export const Default: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],

  args: {
    isOpen: true,
    items: itemsWithIcons
  }
};

export const WithoutIcons: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],
  args: {
    isOpen: true,
    items: itemsWithoutIcons
  }
};

export const Empty: Story = {
  decorators: [
    CenteredDecorator,
    (Story) => ThemeDecorator(Story, Theme.LIGHT)
  ],
  args: {
    isOpen: true,
    items: []
  }
};

export const DefaultDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],

  args: {
    isOpen: true,
    items: itemsWithIcons
  }
};

export const WithoutIconsDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],
  args: {
    isOpen: true,
    items: itemsWithoutIcons
  }
};

export const EmptyDark: Story = {
  decorators: [CenteredDecorator, (Story) => ThemeDecorator(Story, Theme.DARK)],
  args: {
    isOpen: true,
    items: []
  }
};
