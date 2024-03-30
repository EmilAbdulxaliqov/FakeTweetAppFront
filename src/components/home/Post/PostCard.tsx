import { Avatar, Box, Button, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import PostLike from "./PostLike";
import CommentList from "./Comment/CommentList";
import { Link } from "react-router-dom";
import PostDelete from "./PostDelete";
import { PostType } from "../../../assets/types/PostType.ts";
import UpdatePost from "./UpdatePost.tsx";

function PostCard({ post }: Readonly<{ post: PostType }>) {
  const { id, content, userIdWhoCreatedPost, username, usersIdWhoLikedPost } =
    post;
  const [isOpened, setIsOpened] = useState(false);
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");
  const handleOpen = () => {
    setIsOpened(!isOpened);
  };
  return (
    <Box borderY={"1px"} borderColor={"#8899A6"} color={"white"} py={3} px={3}>
      <Link to={`/user/${userIdWhoCreatedPost}`}>
        <Box display={"flex"} alignItems={"center"} gap={3}>
          <Avatar name={username} boxSize={{ base: 8, md: 10 }} />
          <Text>{username}</Text>
        </Box>
      </Link>
      {
       
        <Text pl={{ base: "45px", md: "52px" }} fontWeight={"500"}>
          {content}
        </Text>
      }

      <Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"end"}
          gap={1}
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

          <PostLike usersIdWhoLikedPost={usersIdWhoLikedPost} id={id} />

          {user.userId == userIdWhoCreatedPost && <PostDelete id={id} />}
          {user.userId == userIdWhoCreatedPost && <UpdatePost id={id} content={content} />}
        </Box>
        {
          isOpened && <CommentList isOpened={isOpened} id={id} />
        }
        
      </Box>
    </Box>
  );
}

export default PostCard;
