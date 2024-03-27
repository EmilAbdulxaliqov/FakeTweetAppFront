import { Avatar, Box, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import instance from "../../service/axiosService";

function TweetContent() {
  const [tweet, setTweet] = useState("");
  const queryClient = useQueryClient();

  const user = JSON.parse(localStorage.getItem("user") || "");
  const addPost = async () => {
    await instance.post("post/user/" + user.userId, {
      content: tweet,
      title: "asd",
    });
  };

  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("responsePost");
      setTweet("");
    },

    onError: (error) => {
      console.log(error);
    },
  });

  if (mutation.isError) return <p>Error</p>;
  return (
    <Box
      borderY={"1px"}
      borderColor={"#8899A6"}
      px={2}
      py={3}
      display={{ base: "none", md: "block" }}
    >
      <Box display={"flex"}>
        <Avatar name={user.sub || ""} boxSize={10} />
        <Textarea
          value={tweet}
          placeholder="What's happening?"
          outline={"none"}
          color={"#8899A6"}
          _focusVisible={{ outline: "none" }}
          border={"none"}
          resize={"none"}
          h={"50px"}
          onChange={(e) => setTweet(e.target.value)}
        />
      </Box>
      <Box display={"flex"} w={"full"} justifyContent={"end"} mt={2}>
        <Button
          _hover={{ bg: "#1A91DA" }}
          color={"#fff"}
          bg={"#1DA1F2"}
          isDisabled={tweet.length === 0}
          onClick={() => mutation.mutate()}
        >
          Tweet
        </Button>
      </Box>
    </Box>
  );
}

export default TweetContent;
