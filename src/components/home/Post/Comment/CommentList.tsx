import { Avatar, Box, Text } from "@chakra-ui/react";
import CommentForm from "./CommentForm";
import { useQuery } from "react-query";
import instance from "../../../../service/axiosService";
// import { useState } from "react";
import { Link } from "react-router-dom";

function CommentList({ isOpened, id }: { isOpened: boolean; id: number }) {
  // const [open, setOpen] = useState(isOpened);

  const { isLoading, error, data } = useQuery(["responseComment", id], () => {
    return instance.get("/comment/" + id, {});
  },{refetchOnWindowFocus: false});

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <Box
      className="comments"
      h={isOpened ? "250px" : 0}
      opacity={isOpened ? "1" : 0}
      transition={"height 0.5s"}
      w={"full"}
      mt={2}
      borderTop={"1px"}
      borderColor={"#8899A6"}
    >
      <Box
        h={isOpened ? "200px" : 0}
        overflow={"auto"}
        className="comment_list"
      >
        {data?.data?.length > 0 ? (
          data?.data?.map((comment: any) => (
            <Box
              key={comment.id}
              my={1}
              gap={3}
              p={2}
              rounded={5}
              opacity={isOpened ? "1" : 0}
              color={"white"}
              transition={"0.3s"}
            >
              <Link to={`/profile/${comment.userId}`}>
                <Box display={"flex"} gap={3} w={"full"}>
                  <Avatar name={comment.username} boxSize={10} />
                  <Text> {comment.username}</Text>
                </Box>
              </Link>
              <Text
                pl={{ base: "45px", md: "52px" }}
                fontSize={"14px"}
                fontWeight={"500"}
              >
                {comment.content}
              </Text>
            </Box>
          ))
        ) : (
          <Box
            h={"full"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            opacity={isOpened ? "1" : 0}
            color={"white"}
            transition={"0.3s"}
          >
            <Text>Not Comment !</Text>
          </Box>
        )}
      </Box>

      <Box
        my={3}
        display={isOpened ? "block" : "none"}
        px={2}
        transition={"0.3s"}
      >
        <CommentForm id={id} />
      </Box>
    </Box>
  );
}

export default CommentList;
