import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { HomeService } from "../../services/api/HomeService";

function PopoverForm({
  onCancel,
}: Readonly<{
  firstFieldRef: React.RefObject<HTMLInputElement>;
  onCancel: () => void;
}>) {
  const [tweet, setTweet] = useState("");
  const queryClient = useQueryClient();
  const user = JSON.parse(localStorage.getItem("user") ?? "");
  const addPost = async () => {
    await HomeService.createPost("asd", tweet, user.userId);
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
