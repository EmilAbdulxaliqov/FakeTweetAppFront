import { Box } from "@chakra-ui/react";
import MobileHomeHeader from "../components/home/MobileHomeHeader";
import TweetContent from "../components/home/TweetContent";
import PostList from "../components/home/PostList";

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
