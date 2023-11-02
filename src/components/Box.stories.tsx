import type { Meta, StoryObj } from "@storybook/react";

import Box from "./Box";
import React from "react";

const meta: Meta<typeof Box> = {
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  args: {
    backgroundColor: "#25B4BDFF",
    width: "200px",
    height: "200px",
  },
};
