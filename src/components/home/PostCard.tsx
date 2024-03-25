import { Avatar, Box, Button, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import PostLike from "./PostLike";
import CommentList from "./CommentList";

function PostCard() {
  const [isOpened, setIsOpened] = useState(true);

  const handleOpen = () => {
    setIsOpened(!isOpened);
  };
  return (
    <Box borderY={"1px"} borderColor={"#8899A6"} color={"white"} py={3} px={3}>
      <Box display={"flex"} alignItems={"center"} gap={3}>
        <Avatar name="Ali Huseynov" boxSize={{ base: 8, md: 10 }} />
        <Text>Ali Huseynov</Text>
      </Box>
      <Text pl={{ base: "45px", md: "52px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam quis' nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"end"}
          gap={3}
        >
          <Button onClick={handleOpen}>
            <Icon color={"#8899A6"} as={FaRegComment} w={5} h={5} />
          </Button>

          <PostLike />
        </Box>
        <CommentList isOpened={isOpened} />
      </Box>
    </Box>
  );
}

export default PostCard;
