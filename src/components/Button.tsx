import React from "react";
import styled from "styled-components";
import { ResponsiveValue, WidthProps, width } from "styled-system";

export interface ButtonProps {
  label: string;
  width: ResponsiveValue<string>;
}

const StyledButton = styled.button<WidthProps>(width, {
  backgroundColor: "red",
  color: "white",
  padding: "16px ",
});

const Button = ({ label, width }: ButtonProps) => {
  return (
    <StyledButton width={width} onClick={() => alert("el click anda")}>
      {label}
    </StyledButton>
  );
};

export default Button;
