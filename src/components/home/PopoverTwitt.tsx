import {
  FocusLock,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";

import { FaPencil } from "react-icons/fa6";
import PopoverForm from "./PopoverForm";
function PopoverTwitt() {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef(null);
  return (
    <Popover
      isOpen={isOpen}
      initialFocusRef={firstFieldRef}
      onOpen={onOpen}
      onClose={onClose}
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Icon className="header_icon" as={FaPencil} />
      </PopoverTrigger>
      <PopoverContent top={50} right={-10} p={2}>
        <FocusLock persistentFocus={false}>
          <PopoverForm firstFieldRef={firstFieldRef} onCancel={onClose} />
        </FocusLock>
      </PopoverContent>
    </Popover>
  );
}

export default PopoverTwitt;
