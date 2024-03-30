import { MdDeleteOutline } from "react-icons/md";
import { useMutation, useQueryClient } from "react-query";
import { HomeService } from "../../../../services/api/HomeService";
import { Button, Icon } from "@chakra-ui/react";

function CommentDelete({ id, postId }: Readonly<{ id: number; postId: number }>) {
  const queryClient = useQueryClient();
  const commentDelete = async () => {
    await HomeService.deleteComment(id);
  };
  const mutation = useMutation(commentDelete, {
    onSuccess: () => {
      queryClient.invalidateQueries(["responseComment", postId]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <Button
      onClick={() => mutation.mutate()}
      bg={"none"}
      outline={"none"}
      _focusVisible={{ outline: "none" }}
      _hover={{ bg: "none" }}
    >
      <Icon color={"#8899A6"} as={MdDeleteOutline} w={5} h={5} />
    </Button>
  );
}

export default CommentDelete;
