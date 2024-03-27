import { MdDeleteOutline } from "react-icons/md";
import { Button, Icon } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "react-query";
import { HomeService } from "../../../services/api/HomeService";

function PostDelete({ id }: { id: number }) {
  const queryClient = useQueryClient();
  const deletePost = async () => {
    await HomeService.deletePost(id);
  };

  const mutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("responsePost");
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

export default PostDelete;
