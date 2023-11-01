import React from "react";
import styled from "styled-components";
import {
  border,
  BorderProps,
  LayoutProps,
  layout,
  padding,
  PaddingProps,
  margin,
  MarginProps,
} from "styled-system";

const Input = styled.select<
  BorderProps & LayoutProps & PaddingProps & MarginProps
>(border, layout, padding, margin, {
  outline: "none",
  lineHeight: "inherit",
  fontSize: "inherit",
});

export default Input;
