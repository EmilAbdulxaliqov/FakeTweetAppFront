import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import instance from "../../../../service/axiosService";
import { useMutation, useQueryClient } from "react-query";

function CommentForm({ id }: { id: number }) {
  const queryClient = useQueryClient();
  const [comment, setComment] = useState("");
  const userId = localStorage.getItem("userId");
  const addPost = async () => {
    await instance.post(`comment/${id}/user/${userId}`, {
      content: comment,
    });
  };

  const mutation = useMutation(addPost, {
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
