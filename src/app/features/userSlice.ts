import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserState } from "../../interfaces";

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await axios.get("https://api.github.com/users/QuincyLarson");
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch user";
      });
  },
});

export default userSlice.reducer;
