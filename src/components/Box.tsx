import React from "react";
import { Transform, TransformOptions } from "stream";
import styled from "styled-components";
import {
  ResponsiveValue,
  WidthProps,
  BackgroundProps,
  background,
  width,
  PaddingProps,
  padding,
  MarginProps,
  margin,
  FlexDirectionProps,
  flexDirection,
  LayoutProps,
  layout,
  JustifyContentProps,
  justifyContent,
  color,
  ColorProps,
  HeightProps,
  height,
  MaxWidthProps,
  MaxHeightProps,
  maxWidth,
  maxHeight,
  alignItems,
  AlignItemsProps,
  BorderProps,
  border,
  FlexWrapProps,
  flexWrap,
  position,
  PositionProps,
} from "styled-system";

type BoxProps = PaddingProps &
  WidthProps &
  BackgroundProps &
  MarginProps &
  FlexDirectionProps &
  LayoutProps &
  JustifyContentProps &
  HeightProps &
  ColorProps &
  MaxWidthProps &
  MaxHeightProps &
  AlignItemsProps &
  BorderProps &
  FlexWrapProps &
  PositionProps & { transform?: string };

const Box = styled.div<BoxProps>(
  padding,
  width,
  background,
  margin,
  flexDirection,
  layout,
  justifyContent,
  color,
  height,
  maxWidth,
  maxHeight,
  alignItems,
  border,
  flexWrap,
  position,
  (props: BoxProps) => ({
    transform: props.transform != null ? props.transform : "none",
  }),
  { boxSizing: "border-box" }
);

export default Box;
