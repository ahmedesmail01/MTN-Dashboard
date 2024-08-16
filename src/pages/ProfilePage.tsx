import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../app/features/userSlice";
import { AppDispatch, RootState } from "../app/store";
import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ImGithub } from "react-icons/im";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ErrorComp from "../components/ui/ErrorComp";

const ProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.400");

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorComp msg={"Profile"} />;

  return (
    <div>
      {data && (
        <Center py={6}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "540px" }}
            height={{ sm: "476px", md: "20rem" }}
            direction={{ base: "column", md: "row" }}
            bg={bgColor}
            boxShadow={"2xl"}
            padding={4}
          >
            <Flex flex={1} bg="blue.200">
              <Image
                objectFit="cover"
                boxSize="100%"
                src={data.avatar_url}
                alt={data.name}
              />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                {data.name}
              </Heading>
              <Text textAlign={"center"} color={textColor} px={3}>
                Location: {data.location}
              </Text>
              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={1}
              >
                <Text textAlign={"center"} color={textColor} px={3}>
                  Bio: {data.bio}
                </Text>
              </Stack>

              <Stack
                width={"100%"}
                direction={"row"}
                px={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text textAlign={"center"} color={textColor}>
                  Followers: {data.followers}
                </Text>
                <Text textAlign={"center"} color={textColor}>
                  Following: {data.following}
                </Text>
              </Stack>

              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Button
                  as={"a"}
                  href={data.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size={"sm"}
                  flex={1}
                  fontSize={"sm"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={2}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  Github
                  <ImGithub />
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Center>
      )}
    </div>
  );
};

export default ProfilePage;
