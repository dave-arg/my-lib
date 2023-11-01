import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Premio from "./Premio";

const meta: Meta<typeof Premio> = {
  component: Premio,
};

export default meta;
type Story = StoryObj<typeof Premio>;

export const Primary: Story = {
  args: {
    padding: "0px 16px 0px 0px",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_785994-MLA46540771007_062021-F.webp",
    puntos: "25.000",
    rubro: "ELECTRONICA",
    nombre: "Auriculares JBL 1114",
  },
};
