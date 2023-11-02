import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";
import React from "react";

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  render: () => (
    <Text
      color={"#CCCC"}
      lineHeight={"30px"}
      fontSize={"24px"}
      fontWeight={"bold"}
    >
      holaaaaa
    </Text>
  ),
};
