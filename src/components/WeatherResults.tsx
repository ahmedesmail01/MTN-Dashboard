import { Grid, Text, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import WeatherCard from "./WeatherCard";
import ErrorComp from "./ui/ErrorComp";
import LoadingSpinner from "./ui/LoadingSpinner";

const WeatherResults = () => {
  const weather = useSelector(
    (state: RootState) => state.weather.currentWeather
  );
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  const status = useSelector((state: RootState) => state.weather.status);
  const error = useSelector((state: RootState) => state.weather.error);

  // forecast for 5 days only
  const getDailyForecast = () => {
    if (!forecast?.list) return [];
    const dailyData = forecast.list.filter((item) =>
      item.dt_txt.includes("12:00:00")
    );
    return dailyData.slice(0, 5);
  };

  const dailyForecast = getDailyForecast();

  if (status === "loading") {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }

  return (
    <>
      {error ? (
        <ErrorComp msg={"city"} />
      ) : (
        <>
          {weather && (
            <WeatherCard
              city={weather.name}
              name={weather.weather[0]?.main || ""}
              main={weather.main}
              weather={weather.weather}
              date={new Date().toLocaleDateString()}
            />
          )}
          {forecast && (
            <>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text color={"blue.400"} as={"span"}>
                  Next 5 Days Forecast
                </Text>
              </Heading>
              <Grid
                margin={30}
                templateColumns={"repeat(auto-fill, minmax(300px, 1fr))"}
                gap={6}
              >
                {dailyForecast.map((day, index) => (
                  <WeatherCard
                    key={index}
                    city={weather?.name}
                    name={day.weather[0]?.main || ""}
                    main={day.main}
                    weather={day.weather}
                    date={new Date(day.dt_txt).toLocaleDateString()}
                  />
                ))}
              </Grid>
            </>
          )}
        </>
      )}
    </>
  );
};

export default WeatherResults;
