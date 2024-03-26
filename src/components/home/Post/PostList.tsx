import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import instance from "../../../service/axiosService";
import { useQuery } from "react-query";

function PostList() {
  const { isLoading, error, data } = useQuery("responsePost", () =>
    instance.get("post"),{refetchOnWindowFocus: false}
  );
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
console.log(data);

  return (
    <Box>
      {data?.data?.map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
}

export default PostList;
