import { Box } from "@chakra-ui/react";

function CommentList({ isOpened }: { isOpened: boolean }) {
  return (
    <Box
      className="comments"
      h={isOpened ? "200px" : 0}
      transition={"height 0.5s"}
      w={"full"}
      bg={"white"}
    >
      <Box display={isOpened ? "block" : "none"} color={"black"}>Comment 1</Box>
    </Box>
  );
}

export default CommentList;
