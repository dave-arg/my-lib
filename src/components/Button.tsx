import React from "react";
import styled from "styled-components";
import {
  WidthProps,
  BackgroundProps,
  background,
  width,
  ColorProps,
  color,
  fontSize,
  lineHeight,
  FontSizeProps,
  LineHeightProps,
  PaddingProps,
  padding,
  margin,
  MarginProps,
  HeightProps,
  height,
} from "styled-system";

type ButtonProps = WidthProps &
  BackgroundProps &
  ColorProps &
  FontSizeProps &
  LineHeightProps &
  PaddingProps &
  MarginProps &
  HeightProps & { border?: string };

const Button = styled.button<ButtonProps>(
  width,
  height,
  background,
  color,
  fontSize,
  lineHeight,
  padding,
  margin,
  (props: ButtonProps) => ({
    border: props.border === undefined ? "none" : props.border,
  }),
  {
    lineHeight: "inherit",
    fontSize: "inherit",
    padding: "8px",
    borderRadius: "3px 8px 3px 8px",
    ":hover": {
      opacity: 0.8,
      cursor: "pointer",
    },
  }
);

export default Button;
