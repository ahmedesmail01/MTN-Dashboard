import {
  Flex,
  VStack,
  useBreakpointValue,
  Stack,
  Button,
  Text,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { fetchForecast, fetchWeather } from "../../app/features/weatherSlice";

const HeroWeather = () => {
  const [city, setCity] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  //handlers
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      dispatch(fetchWeather(city));
      dispatch(fetchForecast(city));
    }
  };
  return (
    <>
      <Flex
        w={"full"}
        h={"40vh"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1633555288122-a47b3e12c24d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmVjYXN0fGVufDB8fDB8fHww)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
            >
              Expolre Weather For Your Favourite City.
            </Text>
            <Stack direction={"row"} as={"form"} onSubmit={handleSubmit}>
              <Input
                variant="autline"
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter City Name..."
              />
              <Button
                bg={"blue.400"}
                type="submit"
                rounded={10}
                color={"white"}
                py={4}
                px={10}
                _hover={{ bg: "blue.500" }}
              >
                Get Weather
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </>
  );
};

export default HeroWeather;
