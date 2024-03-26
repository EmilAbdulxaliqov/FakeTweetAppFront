import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";
import PopoverTwitt from "./PopoverTwitt";

function MobileHomeHeader() {
  const username = localStorage.getItem("username");
  return (
    <Box
      className="mobile_header"
      display={{ base: "flex", md: "none" }}
      py={2}
      px={2}
      justifyContent={"space-between"}
      alignItems={"center"}
      color={"white"}
      w={"full"}
      borderBottom={"1px"}
      borderColor={"#8899A6"}
    >
      <Box className="accound_icon">
        <Avatar name={username || ''} boxSize={8} />
      </Box>
      <Text className="header_title">Home</Text>
      <PopoverTwitt />
    </Box>
  );
}

export default MobileHomeHeader;
