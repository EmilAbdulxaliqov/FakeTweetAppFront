import { Box, Icon, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import instance from "../../../service/axiosService";
function PostLike({ likeCount, id }: { likeCount: number; id: number }) {
  const [isLike, setIsLike] = useState(false);
  const [likeCountdis, setLikeCount] = useState(likeCount);
  const userId = localStorage.getItem("userId");

  const Like = async () => {
    await instance.post(`post/${id}/like/${userId}`);
    setIsLike(true);
    setLikeCount(likeCountdis + 1);
  };

  const disLike = async () => {
    await instance.delete(`post/${id}/unlike/${userId}`);
    setIsLike(false);
    setLikeCount(likeCountdis - 1);
  };

  return (
    <Box display={"flex"} alignItems={"center"} py={2}>
      <Icon
        onClick={isLike ? disLike : Like}
        color={isLike ? "#E0245E" : "#8899A6"}
        as={!isLike ? FaRegHeart : FaHeart}
        w={5}
        h={5}
      />
      <Text display={"inline"} fontSize={10} pl={1} color={"#8899A6"}>
        {likeCountdis}
      </Text>
    </Box>
  );
}

export default PostLike;
