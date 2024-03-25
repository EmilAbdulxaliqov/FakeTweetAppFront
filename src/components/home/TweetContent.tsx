import { Avatar, Box, Button, Textarea } from "@chakra-ui/react";
import React from "react";

function TweetContent() {
  return (
    <Box borderY={"1px"} borderColor={"#8899A6"} px={2} py={3}>
      <Box display={"flex"}>
        <Avatar name="Ali Huseynov" boxSize={10} />
        <Textarea
          placeholder="What's happening?"
          outline={"none"}
          color={"#8899A6"}
          _focusVisible={{ outline: "none" }}
          border={"none"}
          resize={"none"}
          h={"50px"}
        />
      </Box>
      <Box display={"flex"} w={"full"} justifyContent={"end"} mt={2}>
        <Button isDisabled color={"#fff"} bg={"#1DA1F2"}>Tweet</Button>
      </Box>
    </Box>
  );
}

export default TweetContent;
