import { Box, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { userType } from "../../../assets/types/LocalUser";
import { HomeService } from "../../../services/api/HomeService";
import { useQueryClient } from "react-query";
function PostLike({
  id,
  usersIdWhoLikedPost,
}: Readonly<{
  id: number;
  usersIdWhoLikedPost: number[];
}>) {  
  const queryClient = useQueryClient();
  const [isLike, setIsLike] = useState(false);
  const [likeCountdis, setLikeCountdis] = useState(usersIdWhoLikedPost.length);
  const user: userType = JSON.parse(localStorage.getItem("user") ?? "{}");

  const handleLike = async () => {
    if (isLike) {
      setLikeCountdis(likeCountdis - 1);
      setIsLike(false);
      await HomeService.unlikePost(id,user.userId);
      queryClient.invalidateQueries(["responsePostLike", user.userId]);
    } else {
      setLikeCountdis(likeCountdis + 1);
      setIsLike(true);
      await HomeService.likePost(id,user.userId);
      queryClient.invalidateQueries(["responsePostLike", user.userId]);
    }
  };

  useEffect(() => {
    if (usersIdWhoLikedPost.includes(user.userId)) {
      setIsLike(true);
    }
  }, []);

  return (
    <Box display={"flex"} alignItems={"center"} py={2}>
      <Icon
        onClick={() => handleLike()}
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
