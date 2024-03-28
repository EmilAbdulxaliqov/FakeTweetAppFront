import React from "react";
import { useQuery } from "react-query";
import { HomeService } from "../../services/api/HomeService";
import Loading from "../../pages/Loading";
import PostCard from "../home/Post/PostCard";
import { PostType } from "../../assets/types/PostType";

function TweetTab() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const { isLoading, error, data } = useQuery(
    ["responsePost", user.userId],
    () => HomeService.getPostByuserId(user.userId),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <Loading />;
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
