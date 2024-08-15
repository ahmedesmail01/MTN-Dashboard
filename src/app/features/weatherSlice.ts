// src/features/weather/weatherSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CurrentWeather, Forecast, WeatherState } from "../../interfaces";

const initialState: WeatherState = {
  currentWeather: null,
  forecast: null,
  status: "idle",
  error: null,
};

const apiKey = import.meta.env.VITE_WEATHER_API;

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (cityName: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    );
    return response.data as CurrentWeather;
  }
);

export const fetchForecast = createAsyncThunk(
  "weather/fetchForecast",
  async (cityName: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`
    );
    return response.data as Forecast;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
        state.error = null; // Reset error when a new request is made
      })
      .addCase(
        fetchWeather.fulfilled,
        (state, action: PayloadAction<CurrentWeather>) => {
          state.status = "succeeded";
          state.currentWeather = action.payload;
        }
      )
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(fetchForecast.pending, (state) => {
        state.status = "loading";
        state.error = null; // Reset error when a new request is made
      })
      .addCase(
        fetchForecast.fulfilled,
        (state, action: PayloadAction<Forecast>) => {
          state.status = "succeeded";
          state.forecast = action.payload;
        }
      )
      .addCase(fetchForecast.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default weatherSlice.reducer;
