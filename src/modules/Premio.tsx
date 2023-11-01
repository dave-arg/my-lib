import { Box, Text, Img } from "../components";
import React from "react";

interface PremioProps {
  padding?: string;
  image?: string;
  puntos?: string;
  nombre?: string;
  rubro?: string;
}

const Premio = ({ padding, image, puntos }: PremioProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"230px"}
      height={"420px"}
      padding={padding}
    >
      {" "}
      <Img borderRadius={"8px 16px 0px 0px"} src={image} height={"60%"} />
      <Box
        backgroundColor={"white"}
        display={"flex"}
        flexDirection={"column"}
        height={"40%"}
        borderRadius={"0px 0px 8px 16px"}
        p={"24px"}
      >
        <Text
          fontSize={"24px !important"}
          lineHeight={"30px !important"}
          fontWeight={"bold"}
        >
          {puntos}
        </Text>
        <Text
          fontSize={"16px !important"}
          lineHeight={"22px !important"}
          mb={"32px"}
        >
          Auriculares JBL 1114{" "}
        </Text>{" "}
        <Text fontWeight={500} color={"#25B4BD"}>
          ELECTRONICA{" "}
        </Text>
      </Box>
    </Box>
  );
};

export default Premio;
