import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import React from "react";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  render: () => (
    <Input
      width={"100%"}
      padding={"8px"}
      placeholder="Buscar"
      border={"#3c3c3b solid"}
      borderWidth={"0px 0px 3px 0px"}
    />
  ),
};
