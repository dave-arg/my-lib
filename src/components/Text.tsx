import React from "react";
import styled from "styled-components";
import {
  FontSizeProps,
  fontSize,
  FontWeightProps,
  fontWeight,
  lineHeight,
  LineHeightProps,
  color,
  ColorProps,
  margin,
  MarginProps,
  PaddingProps,
  padding,
  border,
  BorderProps,
  TextAlignProps,
  textAlign,
} from "styled-system";

const Text = styled.span<
  FontSizeProps &
    FontWeightProps &
    LineHeightProps &
    ColorProps &
    MarginProps &
    PaddingProps &
    BorderProps &
    TextAlignProps
>(fontSize, fontWeight, lineHeight, color, margin, padding, border, textAlign, {
  lineHeight: "inherit",
  fontSize: "inherit",
});

export default Text;
