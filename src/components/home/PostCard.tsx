import { Avatar, Box, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaRegHeart, FaRegComment,FaHeart } from "react-icons/fa";


function PostCard() {
  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    setIsLike(!isLike);
  }


  return (
    <Box borderY={"1px"} borderColor={"#8899A6"} color={"white"} py={3} px={3}>
      <Box display={"flex"} alignItems={"center"} gap={3}>
        <Avatar name="Ali Huseynov" boxSize={{ base: 8, md: 10 }} />
        <Text>Ali Huseynov</Text>
      </Box>
      <Text pl={{ base: "45px", md: "52px" }}>Post Content</Text>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"end"}
        gap={3}
      >
        <Icon color={"#8899A6"} as={FaRegComment} w={5} h={5} />

        <Box display={"flex"} alignItems={"center"}>
          <Icon
            onClick={handleLike}
            color={isLike ? "#E0245E" : "#8899A6"}
            as={!isLike ? FaRegHeart : FaHeart}
            w={5}
            h={5}
          />
          <Text display={"inline"} fontSize={10} pl={1} color={"#8899A6"}>
            10
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default PostCard;
