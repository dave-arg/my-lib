import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Destacado from "./Destacado";

const meta: Meta<typeof Destacado> = {
  component: Destacado,
};

export default meta;
type Story = StoryObj<typeof Destacado>;

export const Primary: Story = {
  args: {
    padding: "0px 16px 0px 0px",
  },
};
