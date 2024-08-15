import {
  Container,
  Text,
  Stack,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import Illustration from "./Illustration";
import ModalTodo from "./ModalTodo";

const HeroToDo = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 2, md: 3 }}
        py={{ base: 3, md: 3 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          lineHeight={"100%"}
        >
          Meeting scheduling{" "}
          <Text as={"span"} color={"orange.400"}>
            Catch Up Your Tasks
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Never miss a Your Goals. A centralized hub for managing tasks and
          priorities. The Todos page provides a clear overview of your to-do
          list, allowing you to efficiently organize, prioritize, and track your
          tasks.
        </Text>
        <Stack spacing={0} direction={"row"}>
          <Button
            as={"div"}
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            <ModalTodo />
          </Button>
        </Stack>
        <Flex w={"full"}>
          <Illustration
            height={{ sm: "10rem", lg: "14rem" }}
            mt={{ base: 2, sm: 3 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
};

export default HeroToDo;
