import {Box} from "@chakra-ui/react";
import MobileHomeHeader from "../components/home/MobileHomeHeader.tsx";
import TweetContent from "../components/home/TweetContent.tsx";
import PostList from "../components/home/Post/PostList.tsx";

function HomePage() {
  return (
    <Box borderX={"1px"} borderColor={"#8899A6"}>
      <MobileHomeHeader />
      <TweetContent />
      <PostList />
    </Box>
  );
}

export default HomePage;
