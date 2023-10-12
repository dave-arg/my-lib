import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button onClick={() => alert("holaaaaaa")}>{label}</button>;
};

export default Button;
