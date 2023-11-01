import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Dialog from "./Dialog";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Primary: Story = {
  args: {
    children: <div>Hola</div>,
    title: "Vas a realizar una compra ?",
  },
};
