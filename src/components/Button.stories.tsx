import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import React from "react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    backgroundColor: "#3c3c3b",
  },
};

Primary.render = (args) => (
  <Button
    width={["33%", "50%", "fit-content"]}
    color="white"
    backgroundColor={args.backgroundColor}
    onClick={() => alert("vamos menem")}
  >
    Boton de ejemplo
  </Button>
);
