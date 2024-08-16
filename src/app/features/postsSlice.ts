import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PostsState } from "../../interfaces";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get("https://dummyjson.com/posts");
  return response.data.posts;
});

const initialState: PostsState = {
  posts: [],
  status: "idle",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default postsSlice.reducer;
