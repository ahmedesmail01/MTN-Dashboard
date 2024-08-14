import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { toggleTodoComplete, deleteTodo } from "../app/features/TodosSlice";

//

interface IProps {
  id: number;
  text: string;
  title: string;
  complete: boolean;
}

const TodoCard = ({ id, title, text, complete }: IProps) => {
  const dispatch = useDispatch();

  // Handlers
  const handleDone = () => {
    dispatch(toggleTodoComplete(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
            textDecoration={complete ? "line-through" : ""}
          >
            Task
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
            textDecoration={complete ? "line-through" : ""}
          >
            {title}
          </Heading>
          <Text
            color={"gray.500"}
            textDecoration={complete ? "line-through" : ""}
          >
            {text}
          </Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Button colorScheme="teal" onClick={handleDone}>
            {complete ? "Undo" : "Done"}
          </Button>
          <Button colorScheme="red" onClick={handleDelete}>
            Remove
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default TodoCard;
