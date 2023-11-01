import { Box } from "../components";
import React from "react";

const svg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path d="M27.306,16.542a1.136,1.136,0,0,1-1.569.008l-5.193-5.04V30.716a1.109,1.109,0,0,1-2.217,0V11.511l-5.193,5.048a1.144,1.144,0,0,1-1.569-.008,1.055,1.055,0,0,1,.009-1.52l7.077-6.842h0A1.248,1.248,0,0,1,19,7.965a1.083,1.083,0,0,1,.426-.083,1.127,1.127,0,0,1,.776.307l7.077,6.842A1.038,1.038,0,0,1,27.306,16.542Z" transform="translate(5.753 5.118)"></path></svg>';

const BackTop = () => {
  return (
    <Box maxWidth={"1152px"} margin={"auto"} width={"100%"} mb={"45px"}>
      <Box
        dangerouslySetInnerHTML={{ __html: svg }}
        width={"50px"}
        height={"50px"}
        borderRadius={"50%"}
        border={"#3c3c3b solid 1px"}
        margin={"auto"}
      />
    </Box>
  );
};

export default BackTop;
