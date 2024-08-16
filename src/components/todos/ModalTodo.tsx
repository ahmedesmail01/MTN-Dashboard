import React, { memo, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormLabel,
  Input,
  FormControl,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../app/features/TodosSlice";

const ModalTodo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showAlert, setShowAlert] = useState(false);
  const [newTodo, setNewTodo] = useState({
    title: "",
    text: "",
  });
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.title === "") {
      setShowAlert(true);
      return;
    }
    dispatch(addTodo(newTodo));
    setNewTodo({ title: "", text: "" });
    onClose();
  };

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        rounded={"full"}
        px={6}
        colorScheme={"orange"}
        bg={"orange.400"}
        _hover={{ bg: "orange.500" }}
        onClick={onOpen}
      >
        Add New Todo
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />

        <ModalContent>
          {showAlert && (
            <Alert status="error" position={"absolute"} bottom={-40}>
              <AlertIcon />
              <AlertTitle mr={2}>You Must Add Title</AlertTitle>
              <AlertDescription>Fill the title input.</AlertDescription>
              <CloseButton
                onClick={() => setShowAlert(false)}
                position="absolute"
                right="8px"
                top="8px"
              />
            </Alert>
          )}
          <ModalHeader>Add New To-do</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                ref={initialRef}
                placeholder="todo title..."
                value={newTodo.title}
                onChange={(e) =>
                  setNewTodo({ ...newTodo, title: e.target.value })
                }
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Details</FormLabel>
              <Input
                placeholder="todo details..."
                value={newTodo.text}
                onChange={(e) =>
                  setNewTodo({ ...newTodo, text: e.target.value })
                }
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddTodo}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default memo(ModalTodo);
