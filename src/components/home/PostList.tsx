import React from "react";
import PostCard from "./PostCard";
import { Box } from "@chakra-ui/react";

function PostList() {
  const postCards = new Array(10)
    .fill(0)
    .map((_, index) => <PostCard key={index} />);

  return <Box py={3}>{postCards}</Box>;
}

export default PostList;
