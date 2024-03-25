import { Box, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
function PostLike() {
  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <Box display={"flex"} alignItems={"center"} py={2}>
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
  );
}

export default PostLike;
