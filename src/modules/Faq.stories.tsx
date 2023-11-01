import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Faq from "./Faq";

const meta: Meta<typeof Faq> = {
  component: Faq,
};

export default meta;
type Story = StoryObj<typeof Faq>;

export const Primary: Story = {
  args: {
    children: "Como se activa el token de seguridad del bip movil ?",
  },
};
