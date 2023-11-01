import React from "react";
import styled from "styled-components";
import {
  margin,
  padding,
  border,
  BorderProps,
  MarginProps,
  PaddingProps,
} from "styled-system";

const Img = styled.img<BorderProps & MarginProps & PaddingProps>(
  margin,
  padding,
  border,
  {}
);

export default Img;
