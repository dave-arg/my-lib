import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BackTop from "./BackTop";

const meta: Meta<typeof BackTop> = {
  component: BackTop,
};

export default meta;
type Story = StoryObj<typeof BackTop>;

export const Primary: Story = {
  args: {},
};
