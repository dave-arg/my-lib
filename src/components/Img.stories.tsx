import type { Meta, StoryObj } from "@storybook/react";
import Img from "./Img";
import React from "react";

const meta: Meta<typeof Img> = {
  component: Img,
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Primary: Story = {
  render: () => (
    <Img
      width={"50%"}
      margin={"50px"}
      padding={"10px"}
      borderRadius={"8px"}
      src="https://www.bancoprovincia.com.ar/CDN/Get/banner_home_cdni_semana_especial_octubre_L"
    />
  ),
};
