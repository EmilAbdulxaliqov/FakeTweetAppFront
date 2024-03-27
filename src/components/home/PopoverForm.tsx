import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import instance from "../../service/axiosService";
import { useMutation, useQueryClient } from "react-query";

function PopoverForm({
  onCancel,
}: {
  firstFieldRef: React.RefObject<HTMLInputElement>;
  onCancel: () => void;
}) {
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
      onCancel();
      setTweet("");
    },

    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel htmlFor="content" color={"black"}>
          Content
        </FormLabel>
        <Textarea
          id="content"
          color={"black"}
          onChange={(e) => setTweet(e.target.value)}
          value={tweet}
        />
      </FormControl>
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          colorScheme="teal"
          isDisabled={tweet == ""}
          onClick={() => mutation.mutate()}
        >
          Tweet
        </Button>
      </ButtonGroup>
    </Stack>
  );
}

export default PopoverForm;
