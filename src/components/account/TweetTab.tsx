import { useQuery } from "react-query";
import { HomeService } from "../../services/api/HomeService";
import PostCard from "../home/Post/PostCard";
import { PostType } from "../../assets/types/PostType";
import { Spinner } from "@chakra-ui/react";
import { useLocation } from "react-router";

function TweetTab() {
  const userId:number =  parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(
    ["responsePost", userId],
    () => HomeService.getPostByuserId(userId),
    { refetchOnWindowFocus: false }
  );

  if (isLoading)  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  );
  if (error) return <p>Error</p>;
  return (
    <>
      {data?.data?.map((post: PostType) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}

export default TweetTab;
