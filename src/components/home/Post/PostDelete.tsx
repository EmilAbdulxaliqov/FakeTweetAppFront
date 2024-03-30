import { MdDeleteOutline } from "react-icons/md";
import { Button, Icon, useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "react-query";
import { HomeService } from "../../../services/api/HomeService";

function PostDelete({ id }: Readonly<{ id: number }>) {
  const queryClient = useQueryClient();
  const toast = useToast();
  const deletePost = async () => {
    await HomeService.deletePost(id);
  };

  const mutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("responsePost");
      toast({
        title: "Delete Post !",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
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
