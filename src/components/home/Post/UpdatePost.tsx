import  { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { HomeService } from "../../../services/api/HomeService";
import {
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FaRegPenToSquare } from "react-icons/fa6";

function UpdatePost({ id, content }: Readonly<{ id: number; content: string }>) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newContent, setNewContent] = useState(content);
  const queryClient = useQueryClient();
  const toast = useToast();
  const updatePost = async () => {
    await HomeService.updatePost(id, "", newContent);
  };

  const mutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("responsePost");
      onClose();
      toast({
        title: "Update Post !",
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
    <>
      <Button
        onClick={onOpen}
        bg={"none"}
        outline={"none"}
        _focusVisible={{ outline: "none" }}
        _hover={{ bg: "none" }}
      >
        <Icon color={"#8899A6"} as={FaRegPenToSquare} w={5} h={5} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Content</FormLabel>
              <Input
                placeholder="Content"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={() => mutation.mutate()}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UpdatePost;
