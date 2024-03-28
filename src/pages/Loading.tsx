import { Box } from "@chakra-ui/react";
import React from "react";

function Loading() {
  return (
    <Box h={"100vh"} w={"full"} bg={"#17202A"} pos={"absolute"} top={0}>
      <Box
        color={"white"}
        fontSize={"3xl"}
        fontWeight={"bold"}
        textAlign={"center"}
        mt={"50vh"}
      >
        Loading...
      </Box>
    </Box>
  );
}

export default Loading;
