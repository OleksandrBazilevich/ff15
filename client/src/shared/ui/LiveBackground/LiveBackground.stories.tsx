import { clip } from "shared/assets";
import { CenteredDecorator } from "shared/config";

import type { Meta, StoryObj } from "@storybook/react";

import { LiveBackground } from "./LiveBackground";

const meta = {
  title: "shared/LiveBackground",
  component: LiveBackground,

  tags: ["autodocs"]
} satisfies Meta<typeof LiveBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [CenteredDecorator],
  args: {
    clip: clip
  }
};
