import { Box } from "../components";
import React from "react";

interface DialogProps {
  children: React.ReactNode;
  title: string;
}

const Dialog = ({ children, title }: DialogProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      maxWidth={"450px"}
      width={"100%"}
      position={"absolute"}
      left={"50%"}
      top={"50%"}
      transform={"translate(-50%, -50%);"}
    >
      <Box
        padding={"20px"}
        background={"linear-gradient(-45deg, #279D2EFF, #25B4BDFF)"}
        borderRadius={"8px 8px 0px 0px"}
        color={"white"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        {title}
        <Box>X</Box>
      </Box>
      <Box
        borderRadius={"0px 0px 8px 8px"}
        padding={"32px 20px"}
        backgroundColor={"white"}
        display={"flex"}
        flexDirection={"column"}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Dialog;
