import PostCard from "./PostCard";
import { Box } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { PostType } from "../../../assets/types/PostType.ts";
import { HomeService } from "../../../services/api/HomeService.ts";

function PostList() {
  const { isLoading, error, data } = useQuery(
    "responsePost",
    () => HomeService.getPosts(),
    { refetchOnWindowFocus: false }
  );
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data);

  return (
    <Box>
      {data?.data?.map((post: PostType) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
}

export default PostList;
