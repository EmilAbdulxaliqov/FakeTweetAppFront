import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { HomeService } from "../../../../services/api/HomeService";

function CommentForm({ id }: { id: number }) {
  const queryClient = useQueryClient();
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem("user") || "");

  const addComment = async () => {
    await HomeService.addComment(id, user.userId, comment);
  };

  const mutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["responseComment", id]);
      setComment("");
    },

    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <InputRightElement width="4.5rem">
        <Button
          h="1.75rem"
          size="sm"
          isDisabled={comment == ""}
          onClick={() => mutation.mutate()}
        >
          Send
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default CommentForm;
