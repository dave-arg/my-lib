import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import React from "react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => (
    <Button
      width={["33%", "50%", "100%"]}
      color="white"
      backgroundColor={"gray"}
      onClick={() => alert("vamos menem")}
    >
      sdsdgsdfgsdg
    </Button>
  ),
};
