import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

function PopoverForm({
  firstFieldRef,
  onCancel,
}: {
  firstFieldRef: React.RefObject<HTMLInputElement>;
  onCancel: () => void;
}) {
  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel htmlFor="Title" color={"black"}>
          Title
        </FormLabel>
        <Input ref={firstFieldRef} id="first-name" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="content" color={"black"}>
          Content
        </FormLabel>
        <Textarea id="content" />
      </FormControl>
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button colorScheme="teal">Tweet</Button>
      </ButtonGroup>
    </Stack>
  );
}

export default PopoverForm;
