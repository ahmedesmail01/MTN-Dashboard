import { Container, Text, Stack, Heading, Flex } from "@chakra-ui/react";
import Illustration from "./Illustration";
import ModalTodo from "./ModalTodo";

const HeroToDo = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 10 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
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
        <Stack spacing={6} direction={"row"}>
          <ModalTodo />
        </Stack>
        <Flex w={"full"}>
          <Illustration
            height={{ sm: "24rem", lg: "28rem" }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
};

export default HeroToDo;
