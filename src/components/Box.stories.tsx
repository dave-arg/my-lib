import type { Meta, StoryObj } from "@storybook/react";

import Box from "./Box";
import React from "react";

const meta: Meta<typeof Box> = {
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  render: () => (
    <Box
      padding={"30px"}
      width={["33%", "50%", "100%"]}
      backgroundColor={"red"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <div> hola</div>
      <div> hola</div>
      <div> hola</div>
    </Box>
  ),
};
