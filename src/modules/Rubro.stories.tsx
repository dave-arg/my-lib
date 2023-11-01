import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Rubro from "./Rubro";

const meta: Meta<typeof Rubro> = {
  component: Rubro,
};

export default meta;
type Story = StoryObj<typeof Rubro>;

export const Primary: Story = {
  args: {
    padding: "0px 16px 0px 0px",
    nombre: "Tecnologia",
  },
};
