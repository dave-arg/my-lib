import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  label: string;
}

const StyledButton = styled.button({
  backgroundColor: "red",
  color: "white",
  padding: "16px ",
});

const Button = ({ label }: ButtonProps) => {
  return (
    <StyledButton onClick={() => alert("el click anda")}>{label}</StyledButton>
  );
};

export default Button;
