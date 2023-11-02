import { Box, Button, Img, Text } from "../components";
import React from "react";

interface DestacadoProps {
  padding?: string;
}

const Destacado = ({ padding }: DestacadoProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      width={"100%"}
      height={"230px"}
      padding={padding}
      maxWidth={"max-content"}
    >
      <Box
        backgroundColor={"white"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        width={"50%"}
        borderRadius={"8px 0px 0px 16px"}
        p={"24px"}
      >
        <Text
          fontSize={"24px !important"}
          lineHeight={"28px !important"}
          fontWeight={"bold"}
        >
          25.000 puntos
        </Text>
        <Text
          fontSize={"16px !important"}
          lineHeight={"22px !important"}
          mb={"32px"}
        >
          Taladro electrico Total 5000 rpm{" "}
        </Text>
        <Button
          backgroundColor={"#25B4BD"}
          color={"white"}
          width={"fit-content"}
          padding={"11px 36px !important"}
        >
          Canjear
        </Button>
      </Box>
      <Img
        borderRadius={"0px 8px 16px 0px"}
        src={
          "https://http2.mlstatic.com/D_NQ_NP_2X_699731-MLC46585285860_072021-F.webp"
        }
        width={"50%"}
      />
    </Box>
  );
};

export default Destacado;
