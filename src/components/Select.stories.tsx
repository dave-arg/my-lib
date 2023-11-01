import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
import React from "react";

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  render: () => (
    <Select
      width={"100%"}
      padding={"8px"}
      placeholder="Buscar"
      border={"#3c3c3b solid"}
      borderWidth={"0px 0px 3px 0px"}
    >
      <option selected disabled>
        Buscar por puntos
      </option>
    </Select>
  ),
};
