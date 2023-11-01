import { Box, Text } from "../components";
import React from "react";

interface FaqProps {
  children?: React.ReactNode;
}

const Faq = ({ children }: FaqProps) => {
  return (
    <Box
      margin={"auto"}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"baseline"}
      borderBottom={"1px solid"}
      width={"100%"}
      maxWidth={"788px"}
      justifyContent={"space-between"}
    >
      <Text
        fontSize={"16px !important"}
        lineHeight={"21px !important"}
        padding={"36px 0px 14px 0px"}
      >
        {children}
      </Text>
      <Box
        height={"14px"}
        width={"14px"}
        border={"#3c3c3b solid"}
        borderWidth={"3px 3px 0px 0px"}
        transform={"rotate(135deg)"}
      ></Box>
    </Box>
  );
};

export default Faq;
