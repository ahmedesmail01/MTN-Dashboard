import {
  Box,
  Heading,
  Text,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";

interface IProps {
  city?: string;
  name: string;
  main: {
    temp: number;
  };
  weather: Array<{
    description: string;
    main: string;
  }>;
  date: string;
}

const WeatherCard = ({ name, city, main, weather, date }: IProps) => {
  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={"sm"}
        my={5}
        mx={[0, 5]}
        bg="white"
        border={"1px"}
        borderColor="black"
        boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
      >
        <Box h={"200px"} borderBottom={"1px"} borderColor="black">
          <Box p={4}>
            <Box
              bg="black"
              display={"inline-block"}
              px={2}
              py={1}
              color="white"
              mb={2}
            >
              <Text fontSize={"xs"} fontWeight="medium">
                {city}
              </Text>
            </Box>
            <Heading color={"black"} fontSize={"2xl"}>
              Weather: {name} <br />
              Temperature: {Math.round(main.temp - 273.15)}°C
            </Heading>
            <Text color={"gray.500"} noOfLines={2}>
              {weather[0]?.description}
            </Text>
            <Text color={"gray.900"} mt={2}>
              Date: {date}
            </Text>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default WeatherCard;
