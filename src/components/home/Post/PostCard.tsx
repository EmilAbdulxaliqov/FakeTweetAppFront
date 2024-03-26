import { Avatar, Box, Button, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import PostLike from "./PostLike";
import CommentList from "./Comment/CommentList";
import { Link } from "react-router-dom";
import PostDelete from "./PostDelete";

function PostCard({ post }: { post: any }) {
  const { id, title, content, userId, username, likeCount } = post;
  const [isOpened, setIsOpened] = useState(false);
  const locUserId = localStorage.getItem("userId");
  const handleOpen = () => {
    setIsOpened(!isOpened);
  };
  return (
    <Box borderY={"1px"} borderColor={"#8899A6"} color={"white"} py={3} px={3}>
      <Link to={`/profile/${userId}`}>
        <Box display={"flex"} alignItems={"center"} gap={3}>
          <Avatar name={username} boxSize={{ base: 8, md: 10 }} />
          <Text>{username}</Text>
        </Box>
      </Link>

      <Text pl={{ base: "45px", md: "52px" }} fontWeight={"500"}>
        {content}
      </Text>

      <Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"end"}
          gap={3}
        >
          <Button
            onClick={handleOpen}
            bg={"none"}
            outline={"none"}
            _focusVisible={{ outline: "none" }}
            _hover={{ bg: "none" }}
          >
            <Icon color={"#8899A6"} as={FaRegComment} w={5} h={5} />
          </Button>

          <PostLike likeCount={likeCount} id={id} />
         
          {
            userId == locUserId && (
              <PostDelete id={id} />
            )
          }
          
        </Box>
        <CommentList isOpened={isOpened} id={id} />
      </Box>
    </Box>
  );
}

export default PostCard;
