import {
  Center,
  Text,
  Box,
  useColorModeValue,
  Stack,
  Heading,
  Collapse,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

interface PostCardProps {
  title: string;
  body: string;
}

const PostCard = ({ title, body }: PostCardProps) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
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
          >
            Post
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {title}
          </Heading>
          <Collapse startingHeight={100} in={show}>
            {body}
          </Collapse>
          <Button size="sm" onClick={handleToggle} mt="1rem">
            Show {show ? "Less" : "More"}
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default PostCard;
